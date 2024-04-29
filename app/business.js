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

function Business() {
  return (
    <LinearGradient
      colors={[
        "rgba(77, 202, 255, 0.7)",
        "rgba(255, 255, 255, 0.7)",
        "rgba(255, 255, 255, 1)",
        "rgba(255, 255, 255, 0.7)",
        "rgba(77, 202, 255, 0.7)",
      ]}
      locations={[0, 0.15, 0.5, 0.7, 1]}
      // style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.image}>
          <Image style={styles.image} source={Profile} />
        </View>
        <View>
          <TouchableOpacity style={styles.ridenow}>
            <Text style={styles.buttonText1}>Ride Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.business}>
            <Text style={styles.buttonText2}>Business</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
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
