import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomTextInput from "./CustumInput";
import CustomButton from "./Button";
import NavigationBar from "./Navbar";
import KycID from "./KycID";
import { useNavigation } from "expo-router";

function KycDetails() {

  const navigation=useNavigation();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");


  return (
    <View style={styles.container}>
  <NavigationBar />
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Enter Your Details</Text>
        <CustomTextInput label="Name" value={name} onChangeText={setName} />
        <CustomTextInput
          label="Mobile"
          value={mobile}
          onChangeText={setMobile}
       

        />
        <CustomTextInput label="Email" value={email} onChangeText={setEmail} />
        <CustomTextInput
          label="Pincode"
          value={pincode}
          onChangeText={setPincode}
     
        />
      </View>
      <CustomButton text="Next" onPress={()=>(navigation.navigate('KycId'))} />
</View>
  );
}

export default KycDetails;

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
   marginTop:20,
   marginBottom:25
  },

  heading: {
    color: "rgba(103, 101, 101, 1)",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
