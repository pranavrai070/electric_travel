import React from "react";
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
import Logo from "../../assets/logoM.png";

function LeasePayment() {
  return (
    <View style={styles.container}>
      <Text style={{ marginLeft: 10,fontWeight: 500, fontSize: 20 }}>Lease details</Text>
      <View style={styles.mainCard}>
        <View style={styles.top}>
          <View style={styles.payment}>
            <Text>Security Deposit </Text>
            <Text>₹ 449</Text>
          </View>
          <View style={styles.payment}>
            <Text>FEV Money top up</Text>
            <Text>₹ 30</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.bottom}>
          <View style={styles.payment1}>
            <Text>Sub total</Text>
            <Text>₹ 481</Text>
          </View>
          <View style={styles.payment1}>
            <Text>GST and Taxes</Text>
            <Text>₹ 0.00</Text>
          </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.bottom}>
          <View style={styles.payment1}>
            <Text>Total amount</Text>
            <Text>₹ 000</Text>
          </View>
          </View>
      
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.card3}>
          <Text style={{ fontWeight: 600, fontSize: 20 }}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LeasePayment;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
  },
  mainCard: {
    height: "60%",
    borderRadius: 20,
    marginTop: 50,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 5,
  },

  top: {
    display: "flex",
    height: 80,
    paddingHorizontal:20,
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop:15
    
  },

  payment: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  line:{
    width:'100%',
    height:1,
    backgroundColor:'black',
    padding:0,
    marginTop:20
  },

  bottom:{
    paddingHorizontal:20,
  },

  payment1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  button: {
    display: "flex",
    alignItems: "center",
    marginTop: 60,
  },

  card3: {
    backgroundColor: "#4CDFFF",
    borderRadius: 25,
    padding: 10,
    display: "flex",
    width: "70%",
    alignItems: "center",
    shadowColor: "#000",
    elevation: 5,
  },
});