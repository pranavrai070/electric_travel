import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Verification from '../components/Auth/Verification';
import { useLocalSearchParams } from 'expo-router';

const verification = ({route}) => {
  const { hrRider } = useLocalSearchParams();
  console.log("getting hrRider at small varifiaction file",hrRider);
  return (
    <View>
      <Verification hrRider={hrRider}/>
    </View>
  )
}

export default verification

const styles = StyleSheet.create({})