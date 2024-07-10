import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Linking,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { BlurView } from "expo-blur";
const QRcode = require("../assets/qrcode.png");
const Locations = require("../assets/b&wLocation.png");
const Turn = require("../assets/turnRight.png");
import {useNavigation} from '@react-navigation/native';

function Barcode() {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <BlurView intensity={100} tint="light" style={styles.blurView} />
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
            latitude: 28.6139,
            longitude: 77.209,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.inputContainer}>
          <Image source={Locations} style={styles.icon} />
          <TextInput
            placeholder="Nearest FEV Hubs"
            placeholderTextColor="#000000"
            style={styles.input}
            secureTextEntry
          />
          {/* <Image source={KeyIcon} style={styles.icon} /> */}
          <View style={styles.turn}>
            <Image source={Turn} style={styles.Turnicon} />
            <Text style={{ fontSize: 10 }}>1.1Km</Text>
          </View>
        </View>
        <View style={styles.cardMain}>
          <TouchableOpacity style={styles.card1} onPress={()=>(navigation.navigate('completeProfile'))}> 
            <Image source={QRcode} style={styles.qr} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Barcode;



const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  blurView: {
    position: "absolute",
    zIndex: 1111,
    bottom: 0,
    left: 0,
    right: 0,
    height: 40, // Adjust the height of the blurred area as needed
  },

  top: {
    flex: 0.7,
  },

  bottom: {
    flex: 0.3,
    display: "flex",
    gap: 10,
    width: "100%",
    padding: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    gap: 20,
    borderColor: "#ccc",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 30,
    width: "100%",
    borderWidth: 2,
  },
  shadowProp: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },

  turn: {
    backgroundColor: "#4CDFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 5,
  },

  cardMain: {
    display: "flex",
    alignItems: "center",
  },

  card1: {
    backgroundColor: "#4CDFFF",
    borderRadius: 20,
    padding: 10,
    display: "flex",
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 5,
  },
});
