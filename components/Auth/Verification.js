import { StyleSheet, Text, View, TextInput, Button,Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';


const Signup = () => {

  const navigation=useNavigation();

    const [phoneNumber, setPhoneNumber] = useState('');
    const handleVerify = () => {
        // Implement verification logic here (e.g., send OTP to the phone number)
        navigation.navigate('password');
      };

      const handlePhoneNumberChange = (number) => {
        setPhoneNumber(number);
    };

      return (
        <View style={styles.container}>
          <Image style={styles.image} source={require('../../assets/image.png')} className="" />
          <Text style={styles.title}>Verification</Text>
          <Text style={styles.message}>You will get OTP in SMS</Text>
          <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            keyboardType="phone-pad"
          />
           <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            keyboardType="phone-pad"
          />
           <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            keyboardType="phone-pad"
          />
           <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            keyboardType="phone-pad"
          />
          </View>
         <TouchableOpacity style={styles.button} onPress={handleVerify}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>
          <Text style={styles.lastLine}>Didn't receive the verification OTP? <Text style={styles.colorChange}>Resend again</Text></Text>
        </View>
      );
    };

export default Verification;

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
        width: '15%',
        height: 51,
        borderRadius: 19,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 30,
        paddingLeft: 20,
        backgroundColor:  '#4E4E4E1A'
      },
      inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,

      },
      colorChange: {
        color: '#00B2FF',
      },
      button: {
        backgroundColor: '#00B2FF',
        width: '99%',
        height: 51,
        borderRadius: 19,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      buttonText: {
        color: 'white'
      }
})