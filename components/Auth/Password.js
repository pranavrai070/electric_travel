import { StyleSheet, Text, View, TextInput, Button,Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';


const Signup = () => {

  const navigation=useNavigation();

    const [phoneNumber, setPhoneNumber] = useState('');
    const handleVerify = () => {
        // Implement verification logic here (e.g., send OTP to the phone number)
        navigation.navigate('kyc');
      };

      const handlePhoneNumberChange = (number) => {
        setPhoneNumber(number);
    };

      return (
        <View style={styles.container}>
          <Image style={styles.image} source={require('../../assets/image.png')} className="" />
          <Text style={styles.title}>Password</Text>
          <Text style={styles.message}>Create a login password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            keyboardType="phone-pad"
          />
         <TouchableOpacity style={styles.button} onPress={handleVerify}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

        </View>
      );
    };

export default Password;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
      },
      image: {
        width: 190,
        height: 148,
        marginBottom: 20,
        marginTop: 40
      },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black', 
        marginBottom: 20
    },
      message: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 40,
        color: 'black', 
        width: '55%'
      },
      bold:{
        fontWeight:'bold'
      },
      input: {
        width: '99%',
        height: 51,
        borderRadius: 19,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 30,
        paddingLeft: 20,
        backgroundColor:  '#4E4E4E1A'
      },
    
      button: {
        backgroundColor: '#00B2FF',
        width: '99%',
        height: 51,
        borderRadius: 19,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: 'white'
      }
})