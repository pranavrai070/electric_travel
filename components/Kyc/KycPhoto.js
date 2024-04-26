import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import CustomButton from "./Button";
import NavigationBar from "./Navbar";
const Camera = require("../../assets/Capture.png");

function KycPhoto() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={Camera} style={styles.icon} />
      </View>

      <View style={styles.linkBox}>
        <Text style={styles.leftButton}>Retake a photo</Text>
        <Text style={styles.rightButton}>Ready</Text>
      </View>
    </View>
  );
}

export default KycPhoto;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  top: {
    flex: 0.85,
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom:25
  },

  icon: {

  },

  linkBox: {
    flex: 0.15,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  leftButton: {
    color: "#373737",
    fontWeight: "700",
    borderWidth: 2,
    borderColor: "#4BC9FF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 50,
  },
  rightButton: {
    color: "#ffffff",
    backgroundColor: "#4BC9FF",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    height: 50,
  },
});
