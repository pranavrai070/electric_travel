import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react';
import profileIcon from '../assets/profileIcon.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import Dropdown from 'react-native-input-select';
import { useNavigation } from 'expo-router';



const data = [
  { title: 'Distance', description: '550 km', icon: <Image source={require('../assets/distance.png')} /> },
  { title: 'Money saved', description: '₹ 500', icon: <Image source={require('../assets/saveMoney.png')} /> },
  { title: 'Carbon', description: '2.75 kgs', icon: <Image source={require('../assets/co2.png')} /> },
  { title: 'Green Points', description: '55', icon: <Image source={require('../assets/location.png')} /> },
];

const Card = ({ icon, title, description }) => {
  return (
    <View className="p-2 text-center flex flex-col justify-center items-center" style={styles.featureCard}>
      <View className="mb-0">{icon}</View>
      <Text className="text-xs" style={styles.cardTitle}>{title}</Text>
      <Text className="text-lg" style={styles.cardValue}>{description}</Text>
    </View>
  );
};

const Profile = () => {

  const navigation=useNavigation();

  const [country, setCountry] = React.useState();

  return (
    <ScrollView>
    <View className="bg-white h-full">
      <View className="p-2 m-4 translate-y-0 flex flex-row h-30" style={styles.card}>
      <View className=" flex flex-row justify-center item-center p-1 rounded-3xl w-20 h-20" style={{backgroundColor:'#4cdfff'}}>
      <Image source={require('../assets/profileIcon.png')} className="-translate-y-0.5" />
      </View>
      <View>
        <Text className="text-2xl p-2">Jason Smith</Text>
        <Text className="text-sm pl-2 -translate-y-2">8233434678</Text>
        <TouchableOpacity style={{backgroundColor: '#d7f8ff',width:70,borderColor:'#4CDFFF',borderWidth:1}} className="rounded-lg -translate-y-1 translate-x-36 h-7 flex felx-row justify-center items-center">
          <Text className="">Ride Now</Text>
        </TouchableOpacity>
      </View>
      </View>

    <View className="flex flex-row justify-around px-4">
      {data.map((item, index) => (
        <Card key={index} icon={item.icon} title={item.title} description={item.description} />
      ))}
    </View>

    <View className="m-4">
    <TextInput
      mode="outlined"
      label="Name"
      className="bg-white h-10"
    />

    <TextInput
      mode="outlined"
      label="DOB"
      className="mt-5 bg-white h-10"
    />

    <TextInput
      mode="outlined"
      label="Mobile"
      className="mt-5 bg-white h-10"
    />

    <TextInput
      mode="outlined"
      label="Email"
      className="mt-5 bg-white h-10"
    />

    <Dropdown
      placeholder="Gender"
      options={[
        { label: 'Male', value: 'M' },
        { label: 'Female', value: 'F' },
        { label: 'Prefer not to say', value: 'P' }
      ]}
      primaryColor={'green'}
      selectedValue={country}
      onValueChange={(value) => setCountry(value)}
      dropdownStyle={{
        borderWidth: 1, // To remove border, set borderWidth to 0
        marginTop:25,
        backgroundColor:'white',
      }}
    />

    </View>


    <View className="flex felx-col justify-center items-center mt-4 mb-4">
    <TouchableOpacity style={styles.loginButton} onPress={()=>(navigation.navigate('(tabs)'))}>
            <Text style={styles.buttonText}>Update Profile</Text>
    </TouchableOpacity>
    </View>

    </View>
    </ScrollView>
  )


}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: "#00D2FF",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: -10,
    marginBottom: 0,
    alignItems: "center",
    justifyContent:'center',
    width:250,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5, // Shadow effect
  },
  featureCard:{
    marginHorizontal:10,
    width:75,
    borderRadius:12,
  },
  cardTitle:{
    fontSize:10
  },
  cardValue:{
    fontSize:15
  }
})



export default Profile;