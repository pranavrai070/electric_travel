import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
const Logo = require("../../assets/logoM.png");
const PhoneIcon = require("../../assets/Phone.png");
const KeyIcon = require("../../assets/Password.png");
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const validMobileNumber = "9521877477";
    const validPassword = "000000";

    if (mobileNumber === validMobileNumber && password === validPassword) {
      Alert.alert("Login Successful", "Welcome!");
    } else {
      Alert.alert("Login Failed", "Please check your credentials.");
    }
  };
  return (
    <LinearGradient
      //   background={["linear-gradient(180deg, #FFE248 44.1%, #4BC9F 92.71%)"]}
      colors={["#FFE248", "#4BC9FF"]}
   
    >
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={Logo} style={styles.logo} />
        </View>

        <View style={styles.formContainer}>
          <View style={[styles.inputContainer, styles.shadowProp]}>
            <Image source={PhoneIcon} style={styles.icon} />
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="#FFFFFF"
              style={styles.input}
              keyboardType="phone-pad"
              value={mobileNumber}
              onChangeText={setMobileNumber}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image source={KeyIcon} style={styles.icon} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#FFFFFF"
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.forget}>Forget Password</Text>
          <View style={styles.bottom}>
            <Text style={styles.newuser}>New User?</Text>
            <Text style={styles.signUpText}> Sign Up</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
  },
  logo: {
    width: 250,
    height: 100,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  formContainer: {
    width: "70%",
  },

  inputContainer: {
    flexDirection: "row",
    backgroundColor:' rgba(78, 78, 78, 0.1)',
    alignItems: "center",
    height: 50,
    gap: 20,
    borderColor: "#ccc",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  shadowProp: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 10, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  input: {
    color: "white",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  loginButton: {
    backgroundColor: " rgba(0, 178, 255, 1)",
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 30,
    alignItems: "center",
    height:50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forget: {
    textAlign: "center",
    fontSize: 14,
    color: "white",
  },

  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  newuser: {
    fontSize: 16,
    color:'white'
  },

  signUpText: {
    fontSize: 16,
    color: "yellow",
  },
});

export default LoginScreen;
