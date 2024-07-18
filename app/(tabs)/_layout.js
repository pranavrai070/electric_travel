import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
const Home = require("../../assets/home.png");
const Rupee = require("../../assets/rupee.png");
const Help = require("../../assets/help.png");
const Dot = require("../../assets/dot.png");
import { Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#f4511e',headerStyle: {
      backgroundColor: '#459cd7',
    }}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Image source={Home} style={{width:30, height:30}} resizeMode='contain' name="home" color={color} />,
          headerShown:false
        }}
      />
      <Tabs.Screen
        name="fevMoney"
        options={{
          title: 'FEV Money',
          tabBarIcon: ({ color }) => <Image source={Rupee} style={{width:20, height:20}}  resizeMode='contain' name="rupee" color={color} />,
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Help',
          tabBarIcon: ({ color }) => <Image source={Help} style={{width:20, height:20}}  resizeMode='contain' name="question" color={color} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => <Image source={Dot} style={{width:20, height:20}}  resizeMode='contain' name="ellipsis-h" color={color} />,
        }}
      />
    </Tabs>
  );
}
