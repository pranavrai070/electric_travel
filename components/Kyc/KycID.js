import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import CustomButton from "./Button";
import NavigationBar from "./Navbar";
const Camera = require("../../assets/Camera.png");

function KycID() {
  const [activeLink, setActiveLink] = useState("Aadhar Card");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleFrontCardClick = () => {};

  const handleBackCardClick = () => {};

  return (
    <View style={styles.container}>
      <NavigationBar />
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.heading}>Choose Document Type</Text>
          <View style={styles.linkBox}>
            <Text
              style={[
                styles.link,
                activeLink === "Aadhar Card"
                  ? styles.activeLink
                  : styles.inactiveLink,
              ]}
              onPress={() => handleLinkClick("Aadhar Card")}
            >
              Aadhar Card
            </Text>
            <Text
              style={[
                styles.link,
                activeLink === "Driving License"
                  ? styles.activeLink
                  : styles.inactiveLink,
              ]}
              onPress={() => handleLinkClick("Driving License")}
            >
              Driving License
            </Text>
          </View>
        </View>
        <View style={styles.middle}>
          <Text style={{ fontSize: 16, color: "#676565", fontWeight: 700 }}>
            Add ID Proof
          </Text>
          <Text style={{ fontSize: 16, color: "#858585" }}>
            Make sure your document are visible
          </Text>
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={handleFrontCardClick}
            >
              <Image source={Camera} style={styles.icon} />
              <Text style={styles.cardText}>Front</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={handleBackCardClick}>
              <Image source={Camera} style={styles.icon} />
              <Text style={styles.cardText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <CustomButton text="Next" />
        </View>
      </View>
    </View>
  );
}

export default KycID;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
  },

  formContainer: {
    width: "100%",
    padding: 10,
    marginTop: 20,
    marginBottom: 25,
    flex: 1,
    justifyContent: "space-between",
 
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
    borderRadius: 5,
  },

  cardContainer: {
    flexDirection: "row",
    marginTop: 30,
    gap: 15,
  },
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 20,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 5,
    alignItems: "center",
  },
  cardText: {
    fontSize: 16,
  },

  middle: {
    marginBottom: 30,
  },
});
