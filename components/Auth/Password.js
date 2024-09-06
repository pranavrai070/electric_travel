import { StyleSheet, Text, View, TextInput, Button,Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';
import { useRouter } from 'expo-router';


const Password = ({hrRider}) => {

  const navigation=useNavigation();
  const router = useRouter();


  console.log("getting hrRider at password file",hrRider);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handlePasswordChange = (password) => {
      setPassword(password);
    };

    const handleConfirmPasswordChange = (password) => {
      setConfirmPassword(password);
    };


      return (
        <View style={styles.container}>
          <Image style={styles.image} source={require('../../assets/image.png')} className="" />
          <Text style={styles.title}>Password</Text>
          <Text style={styles.message}>Create a login password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={handlePasswordChange}
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
            keyboardType="default"
          />
         <TouchableOpacity style={styles.button} onPress={()=>(router.navigate({
      pathname: '/kycPersonalDetails',
      params: {hrRider},
    }))}>
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