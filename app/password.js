import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Password from '../components/Auth/Password';
import { useLocalSearchParams } from 'expo-router';

const password = () => {
  const { hrRider } = useLocalSearchParams();
  return (
    <View>
      <Password hrRider={hrRider}/>
    </View>
  )
}

export default password

const styles = StyleSheet.create({})