import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { View } from "react-native";

const CustomButton = ({ text, onPress, buttonStyle, textStyle, ...rest }) => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress} {...rest}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: "#4BC9FF",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    height: 50,
    width: "80% ",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});

export default CustomButton;
