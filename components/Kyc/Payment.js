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


function Payment() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.balance}>
          <Text>Available balance</Text>
          <Text style={{ fontWeight: 700, fontSize: 28 }}>₹0.00</Text>
        </View>
        <Text style={styles.addMoney}>+Add FEV Money</Text>
      </View>

      <Text
        style={{ fontWeight: 700, marginTop: 10, marginLeft: 10, fontSize: 20 }}
      >
        FEV Money
      </Text>

      <View style={styles.card2}>
        <Text style={{ fontWeight: 500, fontSize: 22, color: "#4A4A4A" }}>
          Add FEV Money
        </Text>
        <Text style={{ fontWeight: 400, fontSize: 15, marginTop: 6 }}>
          Payment in advance
        </Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="₹ 100" />
        </View>
      </View>
      <View style={styles.cardMain}>
        <TouchableOpacity style={styles.card3}>
          <Text style={{ fontWeight: 600, fontSize: 20 }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Payment;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
  },
  card: {
    height: 180,
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "lightgrey",
    // backgroundColor:( '#d9d9d9')
  },

  logo: {
    width: 30,
    height: 30,
  },

  balance: {
    position: "absolute",
    right: 20,
    top: 20,
  },

  addMoney: {
    position: "absolute",
    bottom: 20,
    right: 20,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 12,
    backgroundColor: "white",
    color: "#48DEFF",
    shadowColor: "#000",
    elevation: 5,
    fontSize: 18,
  },

  card2: {
    height: 200,
    padding: 10,
    backgroundColor: "#fff",
    marginTop: 60,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "lightgrey",
  },

  inputContainer: {
    height: 40,
    gap: 20,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    color: "black",
  },

  input: {
    color: "black",
    paddingLeft: 10,
  },

  cardMain: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
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
