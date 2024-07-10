import { ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react';
import GetHelp from '../components/Auth/Help';

const Help = () => {
  return (
    <ScrollView>
    <View>
      <GetHelp/>
    </View>
    </ScrollView>
  )
  
}

export default Help;

const styles = StyleSheet.create({})