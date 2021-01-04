import React, { useEffect } from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const AuthLoading = ({ navigation }) => {
  useEffect(() => {
    checkToken();
  }, []);
  const checkToken = async () => {
    const token = await AsyncStorage.getItem("@token");
    if (token) {
      navigation.navigate("Home");
    } else {
      navigation.navigate("SignIn");
    }
  };
  return (
    <View style={styles.container}>
      <ActivityIndicator size={30} color="Black" />
      <Text>AuthLoading</Text>
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
export default AuthLoading;
