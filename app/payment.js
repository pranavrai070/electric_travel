import { StyleSheet, Text, View, TouchableOpacity, Image ,TextInput} from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Payment = () => {

  const navigation = useNavigation();

    const [text, onChangeText] = React.useState('');
  return (
    <View className="p-2 m-2 h-full">
       
       <LinearGradient
        // Button Linear Gradient
        colors={['#FFE248', 'rgba(255, 253, 239, 0.991047)', 'rgba(252, 243, 192, 0.921875)', 'rgba(217, 217, 217, 0)']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        locations={[0.0021, 1, 1, 1]}
        style={styles.card}
        >
      <View className=" translate-y-0 h-44" >


        <View className="flex flex-row space-x-28 > * + * pt-2 ">
          <Image
            source={require("../assets/fevlogo.png")}
            className="-translate-y-6"
          />

          <View className="flex flex-col items-start translate-y-2">
            <Text>Available Balance</Text>
            <Text className="text-2xl font-bold">₹ 0.00</Text>
          </View>
        </View>

        <View className="flex flex-row justify-end items-center mr-2 mt-6">
            <TouchableOpacity style={styles.addMoneyButton} className="felx flex-row justify-center items-center">
                <Text style={{color:"#FFE248"}} className="text-xl font-semibold">+ Add FEV Money</Text>
            </TouchableOpacity>
        </View>


      </View>
      </LinearGradient>

      <Text className="text-xl font-semibold m-2">FEV Money</Text>
      
      <View className="felx flex-col mt-10">
       <TouchableOpacity style={styles.repaymentButton} className="flex flex-row justify-center items-center">
       <Image
            source={require("../assets/rupeeCircle.png")}
            className="-translate-x-12"
          />
        <Text className="font-semibold -translate-x-10">Refundable deposit</Text>
        <Text className="font-semibold translate-x-8">Pay 499/-</Text>
       </TouchableOpacity>

       <View className="mt-4 p-4" style={styles.addMoneyForm}>
        <Text className="text-xl">Add FEV Money</Text>
        <Text className="text-sm"> This will be used to pay for your rides</Text>

        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="numeric"
      />

      <View className="flex flex-row mt-4">
        <TouchableOpacity style={styles.moneyChooseButton} className="items-center justify-center">
            <Text>₹ 60</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moneyChooseButton} className="items-center justify-center">
            <Text>₹ 120</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moneyChooseButton} className="items-center justify-center">
            <Text>₹ 180</Text>
        </TouchableOpacity>
      </View>
       </View>
      </View>
    
    <View className="items-center justify-center">
    <TouchableOpacity style={styles.continueButton} className="items-center justify-center mt-10" onPress={()=>(navigation.navigate('rideStart'))}>
        <Text className="font-semibold">
            Continue
        </Text>
    </TouchableOpacity>
    </View>


    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 5, // Shadow effect
  },
  addMoneyButton:{
    backgroundColor: '#ffffFF',
    height:40,
    width:200,
    borderRadius:15,
    elevation: 7, // Shadow effect
},
repaymentButton:{
    backgroundColor: '#48DEFF',
    height:50,
    width:"100%",
    borderRadius:12,
    elevation: 7, // Shadow effect
},
addMoneyForm:{
    borderRadius:15,
    backgroundColor:'#ffffff',
    height:220,
},
input: {
    height: 40,
    width:"100%",
    marginTop:30,
    borderWidth: 0.5,
    borderRadius:8,
    borderColor:"#B4B4B4",
    backgroundColor:'#ffffff'
  },
moneyChooseButton:{
    backgroundColor: '#ffffff',
    borderColor:"#0059C1",
    height:35,
    borderWidth: 1,
    width:"25%",
    marginHorizontal:5,
    borderRadius:20
},
continueButton:{
    backgroundColor: '#48DEFF',
    height:40,
    width:"80%",
    borderRadius:20
}
});
