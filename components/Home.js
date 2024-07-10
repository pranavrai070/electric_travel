import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
const LeaseIcon = require("../assets/newLease.png");
const RideIcon = require("../assets/newRide.png");
// const RideIcon = require("../assets/RN.png");
const ArrowIcon = require("../assets/arrow.png");
const Location = require("../assets/newLocation.png");
const Member = require("../assets/newMember.png");
import { LinearGradient } from "expo-linear-gradient";
import {useNavigation} from '@react-navigation/native';
// import MapView, { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { BlurView } from "expo-blur";

function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <BlurView intensity={80} tint="light" style={styles.blurView} />
      
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

      <View style={styles.middle}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Image source={Location} style={styles.icon1} />

          <Text style={styles.middletext}>Nearest FEV Hubs</Text>
        </View>
        <View>
          <Image
            source={Member}
            style={styles.icon2}
            resizeMode="contain"
            borderRadius={15}
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <LinearGradient
          colors={[
            "rgba(72, 222, 255, 0.7)",
            "rgba(0, 209, 255, 0.9)",
            "rgba(72, 222, 255, 0)",
          ]}
          style={styles.card1}
          className="drop-shadow-md"
        >
          <TouchableOpacity onPress={()=>(navigation.navigate('barcode'))} >
            <Text style={{ fontWeight: 500 }}>Ride Now</Text>
            <Image source={LeaseIcon} style={styles.icon} />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.text}>Scan a FEV to take a ride</Text>
              <Image source={ArrowIcon} style={styles.arrow} />
            </View>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={["#FFFBE9", "#FFE551", "#FFCC11", "rgba(217, 217, 217, 0)"]}
          style={styles.card2}
        >
          <TouchableOpacity>
            <Text style={{ fontWeight: 500 }}>Lease</Text>
            <View>
              <Image source={RideIcon} style={styles.icon} />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.text}>Rent a FEV to take rides</Text>
              <Image source={ArrowIcon} style={styles.arrow} />
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#fff",
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

  middle: {
    flex: 0.1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    padding: 10,
  },

  middletext: {
    backgroundColor: "#ffe041",
    fontSize: 12,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    position: "absolute",
    bottom: 5,
    left: 60,
  },

  icon1: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  icon2: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },

  bottom: {
    flex: 0.3,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    width: "100%",
    padding: 10,
  },
  card1: {
    flex: 1,

    borderRadius: 20,
    padding: 10,
    paddingVertical: 15,
    // borderWidth: 2,
    // borderColor: "lightgrey",
  },
  card2: {
    flex: 1,

    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: "lightgrey",
  },

  icon: {
    height: 100,
  },
  arrow: {
    width: 20,
    height: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  text: {
    flex: 0.7,
    fontSize: 13,
  },
});
