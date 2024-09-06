import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  ...rest
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, styles.shadowProp]}>
        <TextInput
          style={styles.input}
          //   placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          {...rest}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#4BC9FF54",
    height: 50,
    gap: 20,
    borderColor: "#ccc",
    borderRadius: 12,
    marginBottom: 20,
    marginTop:5,
    display: "flex",
    justifyContent: "center",
  },

  input: {
    color: "#000000",
    paddingLeft:20
  },
});

export default CustomTextInput;
