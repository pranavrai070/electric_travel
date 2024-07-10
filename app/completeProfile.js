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
const Profile = require("../assets/profilepic.png");
import { useNavigation } from "expo-router";

function completeProfile() {
  const navigation=useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image style={styles.image} source={Profile} />
        {/* <View style={styles.heading}> */}
        <Text style={styles.heading}>
          {" "}
          Complete Your Profile to start your ride
        </Text>
        {/* </View> */}
      </View>
      <View>
        <TouchableOpacity style={styles.loginButton} onPress={()=>(navigation.navigate('profile'))}>
          <Text style={styles.buttonText}>Complete Your Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default completeProfile;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow:"visible",
    height:'100%'
  },

  loginButton: {
    backgroundColor: "#FFE349",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 60,
    marginLeft:'10%',
    alignItems: "center",
    height: 50,
    width: "80%",
    borderWidth: 2,
    borderColor: "lightgrey",

  },
  buttonText: {
    color: "#000000",
    fontSize: 20,
  },

  image: {
    width: "100%",
    padding: 10,
    marginTop: 10,
  },

  heading: {
    textAlign: "center",
    fontSize: 24,
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
});
