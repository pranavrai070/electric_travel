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

function Business() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-center bg-red-300">
      <Text className="text-3xl">Open up App.js start app!</Text>
      <StatusBar style="auto" />

      <Link href="/tabs" style={{ color: "blue" }}>
        Tabs
      </Link>
      <Link href="/home" style={{ color: "blue" }}>
        Home
      </Link>
      <Link href="/profile" style={{ color: "blue" }}>
        Go to Profile
      </Link>
      <Link href="/completeProfile" style={{ color: "blue" }}>
        Complete Profile
      </Link>
      <Link href="/login" style={{ color: "blue" }}>
        Go to Login
      </Link>
      <Link href="/barcode" style={{ color: "blue" }}>
        Go to Barcode
      </Link>
      <Link href="/rideStart" style={{ color: "blue" }}>
        Ride start
      </Link>
      <Link href="/kyc" style={{ color: "blue" }}>
        KYC
      </Link>
      <Link href="/business" style={{ color: "blue" }}>
        Business
      </Link>
      <Link href="/signup" style={{ color: "blue" }}>
        SignUp
      </Link>
      <Link href="/password" style={{ color: "blue" }}>
        Create Password
      </Link>
      <Link href="/verification" style={{ color: "blue" }}>
        Verification
      </Link>
      <Link href="/help" style={{ color: "blue" }}>
        get help
      </Link>
      <Link href="/menu" style={{ color: "blue" }}>
        Go to menu
      </Link>
      <Link href="/offer" style={{ color: "blue" }}>
        Go to Offers
      </Link>
      <Link href="/takePhoto" style={{ color: "blue" }}>
        Go to Take Photo
      </Link>
      <Link href="/feedback" style={{ color: "blue" }}>
        Go to Feedback
      </Link>
      <Link href="/payment" style={{ color: "blue" }}>
        Go to Payment
      </Link>
      <Link href="/memberships" style={{ color: "blue" }}>
        Memberships
      </Link>
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
