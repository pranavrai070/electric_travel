import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomTextInput from "./CustumInput";
import CustomButton from "./Button";
import NavigationBar from "./Navbar";
import { useNavigation } from "expo-router";

function KycBank() {

    const navigation=useNavigation();

    const [activeLink, setActiveLink] = useState("Aadhar Card");

    const handleLinkClick = (link) => {
      setActiveLink(link);
    };

  return (
    <View style={styles.container}>
      <NavigationBar />
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Enter Account Details</Text>
        <View style={styles.linkBox}>
            <Text
              style={[
                styles.link,
                activeLink === "Account Type"
                  ? styles.activeLink
                  : styles.inactiveLink,
              ]}
              onPress={() => handleLinkClick("Account Type")}
            >
              Account Type
            </Text>
            <Text
              style={[
                styles.link,
                activeLink === "Saving"
                  ? styles.activeLink
                  : styles.inactiveLink,
              ]}
              onPress={() => handleLinkClick("Saving")}
            >
              Saving
            </Text>
            <Text
              style={[
                styles.link,
                activeLink === "Current"
                  ? styles.activeLink
                  : styles.inactiveLink,
              ]}
              onPress={() => handleLinkClick("Current")}
            >
              Current
            </Text>
          </View>
        <CustomTextInput label="Name on Account" />
        <CustomTextInput label="Account Number" />
        <CustomTextInput label="Account Number" />
        <CustomTextInput label="IFSC code" />
      </View>

      <CustomButton text="Submit" onPress={()=>(navigation.navigate('(tabs)'))} />
    </View>
  );
}

export default KycBank;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
  },

  formContainer: {
    width: "100%",
    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: { width: -2, height: 30 },
    shadowOpacity: 10,
    shadowRadius: 20,
    marginTop: 20,
    marginBottom: 25,
  },

  heading: {
    color: "rgba(103, 101, 101, 1)",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },

  linkBox: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginBottom:20
  },

  link: {
    fontSize: 16,
    marginBottom: 10,
  },
  activeLink: {
    color: "white",
    backgroundColor: "#4BC9FF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 22,
  },
  inactiveLink: {
    color: "rgba(81, 81, 81, 1)",
    backgroundColor: "rgba(196, 237, 255, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 22,
  },
});
