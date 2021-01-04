import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Logo from "../../assets/instagram.png";
import AppStore from "../../assets/AppStore..png";
import GooglePlay from "../../assets/640px-Google_Play_Store_badge_EN.svg.png";
import { AntDesign } from "@expo/vector-icons";
const SignIn = ({ navigation }) => {
  const saveToken = async () => {
    await AsyncStorage.setItem("@token", "dataToken");
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.up}>
        <View style={styles.up_logo}>
          <Image style={styles.logo} source={Logo} />
        </View>
        <View>
          <View style={styles.email}>
            <TextInput
              placeholder="Số điện thoại , tên người dùng hoặc email"
              style={styles.email_input_input}
            />
          </View>
          <View style={styles.password}>
            <TextInput
              secureTextEntry={true}
              placeholder="Mật khẩu"
              style={styles.password_input_input}
            />
          </View>
          <TouchableOpacity style={styles.login} onPress={() => saveToken()}>
            <Text style={styles.login_text}>Đăng nhập</Text>
          </TouchableOpacity>
          <View style={styles.or}>
            <View style={styles.or_line} />
            <View style={styles.or_line} />
          </View>
          <Text style={styles.or_text}>HOẶC</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 30,
              justifyContent: "space-around",
            }}
          >
            <AntDesign name={"facebook-square"} size={20} color={"purple"} />
            <Text style={{ color: "purple", fontSize: 15 }}>
              Đăng nhập bằng Facebook
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text onPress={() => {}} style={{ color: "purple" }}>
              Quên mật khẩu ?
            </Text>
          </View>
          <View style={styles.register}>
            <Text style={{ fontSize: 13 }}>Bạn không có tài khoản?</Text>
            <Text
              onPress={() => navigation.navigate("SignUp")}
              style={{ color: "purple", fontWeight: "bold", marginLeft: 5 }}
            >
              Đăng ký
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <TouchableOpacity
              onPress={() => {
                alert("App Store");
              }}
            >
              <Image source={AppStore} style={styles.img} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                alert("App Store");
              }}
            >
              <Image source={GooglePlay} style={styles.img} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "6%",
  },
  up: {
    width: "100%",
    height: "60%",
    alignItems: "center",
  },
  logo: {
    width: 175,
    height: 51,
  },
  up_logo: {
    width: "100%",
    height: 80,
    //backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  email: {
    width: 295,
    height: 48,
    backgroundColor: "#FAFAFA",
    borderRadius: 2,
    marginTop: 10,
    borderColor: "gray",
    borderWidth: 0.3,
  },
  email_input_input: {
    padding: 10,
    fontSize: 13,
  },
  password: {
    width: 295,
    height: 48,
    backgroundColor: "#FAFAFA",
    borderRadius: 2,
    borderColor: "gray",
    borderWidth: 0.3,
    marginTop: 10,
  },
  password_input_input: {
    padding: 10,
    fontSize: 13,
  },
  login: {
    backgroundColor: "#0095F6",
    width: 295,
    borderRadius: 5,
    height: 38,

    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  login_text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  or: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  or_line: {
    width: 90,
    borderWidth: 0.5,
    borderColor: "gray",
  },
  or_text: {
    position: "absolute",
    top: 180,
    left: 125,
    color: "gray",
    fontSize: 15,
  },
  login_facebook: {
    marginLeft: 10,
  },
  register: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 50,
    borderWidth: 1,
    marginTop: 20,
    borderColor: "gray",
  },
  img: {
    borderRadius: 5,
    width: 150,
    height: 50,
  },
});
export default SignIn;
