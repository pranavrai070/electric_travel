import { ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react';
import GetHelp from '../components/Auth/Help';

const help = () => {
  return (
    <ScrollView>
    <View>
      <GetHelp/>
    </View>
    </ScrollView>
  )
  
}

export default help;

const styles = StyleSheet.create({})