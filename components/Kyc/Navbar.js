import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("Personal Details");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.link,
          activeLink === "Personal Details" && styles.activeLink,
        ]}
        onPress={() => handleLinkClick("Personal Details")}
      >
        <Text
          style={[
            styles.linkText,
            activeLink === "Personal Details" && styles.activeLinkText,
          ]}
        >
          Personal Details
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.link, activeLink === "ID Proof" && styles.activeLink]}
        onPress={() => handleLinkClick("ID Proof")}
      >
        <Text
          style={[
            styles.linkText,
            activeLink === "ID Proof" && styles.activeLinkText,
          ]}
        >
          ID Proof
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.link,
          activeLink === "Bank Details" && styles.activeLink,
        ]}
        onPress={() => handleLinkClick("Bank Details")}
      >
        <Text
          style={[
            styles.linkText,
            activeLink === "Bank Details" && styles.activeLinkText,
          ]}
        >
          Bank Details
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,
  },
  link: {
    paddingVertical: 10,
    borderBottomWidth: 5,
    borderBottomColor: "rgba(217, 217, 217, 1)",
  

  },
  activeLink: {
    borderBottomWidth: 5,
    borderBottomColor: "rgba(75, 201, 255, 1)",

  },
  linkText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },

  activeLinkText: {
    // color: 'black',
    color: "rgba(75, 201, 255, 1)",
  },
});

export default NavigationBar;
