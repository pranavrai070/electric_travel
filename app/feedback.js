import { StyleSheet, Text, View,Image,SafeAreaView,TextInput,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const feedback = () => {

const navigation = useNavigation();

const [text, onChangeText] = React.useState('');

  return (
    <View className="h-screen">
    <View className="mt-6" style={styles.container}>
      <Image className="w-full" source={require('../assets/feedback.png')}  resizeMode="contain" />
      <Image className="w-full" style={[styles.fevLogo,{
        transform: [{translateY: -68}]
      }]} source={require('../assets/fevCompleteLogo.png')}  resizeMode="contain" />

      <View className="felx flex-col justify-center items-center" style={[styles.feedBackForm,{
        transform: [{translateY: -88.8}]
      }]}>
        <Text className="text-2xl font-semibold mt-4">Help us be<Text style={{color:"#FFD700"}}> better</Text></Text>
        <Text className="text-xs text-gray-400"> submit your anonymous feedback below.</Text>

    <View className="flex flex-row justify-center items-center">
        <Image className="w-full mt-4" source={require('../assets/feedback_emoji_1.png')}  resizeMode="contain" />
    </View>

        

        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="What’s on your mind?"
      />
      </View>

      <TouchableOpacity style={styles.finishButton} onPress={()=>(navigation.navigate('(tabs)'))} className="flex flex-row justify-center items-center -translate-y-16">
            <Text className="font-semibold">Submit</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  )
}

export default feedback

const styles = StyleSheet.create({
    container:{
        margin:20
    },
    input: {
        height: 150,
        width:"90%",
        margin:20,
        padding:10,
        borderWidth: 1,
        borderRadius:15,
        elevation:10,
        borderColor:"#F5F5F5",
        backgroundColor:'#F5F5F5'
      },
    feedBackForm:{
        backgroundColor:'#ffffff',
        borderRadius:15,
    },
    finishButton:{
        backgroundColor: '#ffe248',
        height:40,
        width:325,
        borderRadius:8,
        elevation: 7,
    }
})