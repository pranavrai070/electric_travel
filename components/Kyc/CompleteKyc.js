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
const Profile = require("../../assets/KycProfile.png");
import CustomButton from "./Button";
import KycDetails from "./KycDetails";
import { useNavigation } from "expo-router";

function completeProfile() {

  const navigation=useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image style={styles.image} source={Profile} />
        <View style={styles.heading1}>
          <Text style={styles.heading}>Complete your KYC</Text>
         
        </View>
        <CustomButton text="Next" onPress={()=>(navigation.navigate('kycPersonalDetails'))} />
      </View>
    </View>

  );
}

export default completeProfile;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    overflow: "visible",
    height: "100%",
    padding: 10,
  },

  image: {
    width: "100%",
    marginTop: 10,
  },

  heading: {
    textAlign: "center",
    fontSize: 24,
    width: "50%",
  },

  heading1: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 50,
  },
});
