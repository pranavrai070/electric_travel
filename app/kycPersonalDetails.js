import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import KycDetails from '../components/Kyc/KycDetails';
import { useLocalSearchParams } from 'expo-router';

const kycPersonalDetails = () => {
  const { hrRider } = useLocalSearchParams();

  console.log("getting hrRider at last for signup",hrRider);
  return (
    <View>
       <KycDetails hrRider={hrRider}/>
    </View>
  )
}

export default kycPersonalDetails

const styles = StyleSheet.create({})