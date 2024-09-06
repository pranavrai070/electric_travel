import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const Profile = require("../assets/business.png");
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import LoginScreen from "../components/Auth/Login";

function Business() {
  const navigation = useNavigation();

  return (
    <View>
    <LoginScreen/>
    </View>
  );
}

export default Business;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
    overflow: "visible",
    height: "100%",
    // backgroundColor: "#fff",
  },

  ridenow: {
    backgroundColor: "#00b2ff",
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: "10%",
    alignItems: "center",
    height: 50,
    width: "80%",
    // borderWidth: 2,
    // borderColor: "lightgrey",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 5,
  },
  business: {
    backgroundColor: "#Fff",
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: "10%",
    alignItems: "center",
    height: 50,
    width: "80%",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 5,
  },

  buttonText1: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonText2: {
    color: "#00b2ff",
    fontSize: 22,
    fontWeight: "bold",
  },

  image: {
    width: "100%",
  },
});
