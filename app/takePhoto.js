import { StyleSheet, Text, View, TouchableOpacity,Image,ScrollView } from "react-native";
import { Camera, CameraType } from 'expo-camera';
import {useNavigation} from '@react-navigation/native';
import React from "react";

const takePhoto = () => {

  const navigation = useNavigation();

  const onGoToCamera = () => {
    navigation.navigate('Scanner');
  };

  return (
    <View className="p-0 m-4 h-full">
   
      <View className="flex flex-row justify-center items-center">
        <View style={styles.takePhoto} className="flex flex-col justify-center items-center">
          <TouchableOpacity className="flex flex-row justify-center items-center" style={styles.rideStartButton}>
            <Text onPress={onGoToCamera}>Take a Photo</Text>
          </TouchableOpacity>
          <Text className="font-semibold -translate-x-10 translate-y-16">Ride Start</Text>
        </View>

        <View style={styles.takePhoto} className="flex flex-col justify-center items-center">
          <TouchableOpacity className="flex flex-row justify-center items-center" style={styles.rideEndButton}>
            <Text>Take a Photo</Text>
          </TouchableOpacity>
          <Text className="font-semibold -translate-x-10 translate-y-16">Ride End</Text>
        </View>
      </View>

      <View className="flex felx-col justify-end mt-6 items-end space-y-3 > * + * ">

        <TouchableOpacity style={styles.shareButton} className="flex flex-row justify-center items-center">
            <Text >Tell your friends
            
            </Text>
            <Image className="ml-2" source={require('../assets/share.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} className="flex flex-row justify-center items-center">
            <Text>Save
            
            </Text>
            <Image className="ml-2" source={require('../assets/save.png')} />
        </TouchableOpacity>

      </View>

      <View style={styles.bottomActionButton} className="flex felx-col justify-center items-center translate-y-56">

        <TouchableOpacity style={styles.skipButton} className="flex flex-row justify-center items-center mb-3">
            <Text className="font-semibold">Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.finishButton} className="flex flex-row justify-center items-center">
            <Text className="font-semibold">Finish</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default takePhoto;

const styles = StyleSheet.create({

    takePhoto:{
        backgroundColor:'#f0f0f0',
        height:220,
        width:160,
        borderRadius:8,
        margin:6,
        elevation:10
    },

    rideStartButton:{
        backgroundColor: '#48DEFF',
        height:35,
        width:120,
        borderRadius:8,
        elevation: 7, // Shadow effect
    },

    rideEndButton:{
        backgroundColor: '#FFE248',
        height:35,
        width:120,
        borderRadius:8,
        elevation: 7, // Shadow effect
    },

    shareButton:{
        backgroundColor: '#f0f0f0',
        height:40,
        width:180,
        borderRadius:8,
        elevation: 7,
    },

    saveButton:{
        backgroundColor: '#f0f0f0',
        height:40,
        width:80,
        borderRadius:8,
        elevation: 7,
    },
    skipButton:{
        backgroundColor: '#ffffff',
        height:40,
        width:335,
        borderRadius:8,
        elevation: 7,
    },
    finishButton:{
        backgroundColor: '#ffe248',
        height:40,
        width:335,
        borderRadius:8,
        elevation: 7,
    }
});
