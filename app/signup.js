import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Signup from '../components/Auth/Signup';
import { useLocalSearchParams } from 'expo-router';

const signup = () => {

  const { hrRider } = useLocalSearchParams();
  console.log("getting hrRider for true first",hrRider);

  return (
    <View>
      <Signup hrRider={hrRider}/>
    </View>
  )
}

export default signup

const styles = StyleSheet.create({})