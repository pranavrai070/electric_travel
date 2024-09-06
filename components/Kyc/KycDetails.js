import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomTextInput from "./CustumInput";
import CustomButton from "./Button";
import NavigationBar from "./Navbar";
import KycID from "./KycID";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "expo-router";

function KycDetails({hrRider}) {
  const navigation = useNavigation();

  const [selectedBhType, setSelectedBhType] = useState("Organization");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [pincode, setPincode] = useState("");
  const [dob, setDob] = useState("");

  const bhTypeData=[
    {id:1,name:"Organization"},
    {id:2,name:"Single Rider"}
  ]

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Enter Your Details</Text>
        <CustomTextInput
          label="Name: As per adhaar"
          value={name}
          onChangeText={setName}
        />
        
        {!hrRider && <View>
        <Text style={styles.pickerLabel}>Select Business House Type</Text>
        <Picker
          selectedValue={selectedBhType}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedBhType(itemValue)
          }
        >
          {bhTypeData.map((item)=>(
            <Picker.Item key={item.id} label={item.name} value={item.name}/>
          ))}
        </Picker>
        </View>}

        {selectedBhType==="Organization" && !hrRider && <CustomTextInput label="Company Name as Per Gst" value={companyName} onChangeText={setCompanyName} /> }

        <CustomTextInput label="Email" value={email} onChangeText={setEmail} />
        <CustomTextInput label="DOB" value={dob} onChangeText={setDob} />
      </View>
      <CustomButton text="Submit" onPress={() => navigation.navigate("(tabs)")} />
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
    marginTop: 20,
    marginBottom: 25,
  },

  heading: {
    color: "rgba(103, 101, 101, 1)",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
