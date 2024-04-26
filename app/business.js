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
const Profile = require("../assets/business.png");

function Business() {
  return (
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
    marginTop:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 5,
  },

  buttonText1:{
    color:'white',
    fontSize:22,
    fontWeight:"bold"
  },
  buttonText2:{
    color:'#00b2ff',
    fontSize:22,
    fontWeight:"bold"
  },
  


  image: {
    width: "100%",
  },
});
