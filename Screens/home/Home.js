import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Home = ({ navigation }) => {
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("@token");
      navigation.navigate("SignIn");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Home1</Text>
      <Button onPress={() => removeValue()} title="Đăng xuất"></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Home;
