import { StyleSheet, Text, View ,TouchableOpacity,Image,FlatList, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';

const menu = () => {

    const data = [
        { title: 'Distance', description: '0 km', icon: <Image style={styles.cardIcon} source={require('../assets/distance.png')} /> },
        { title: 'Money saved', description: '₹ 0', icon: <Image style={styles.cardIcon} source={require('../assets/saveMoney.png')} /> },
        { title: 'Carbon', description: '0 kgs', icon: <Image style={styles.cardIcon} source={require('../assets/co2.png')} /> },
        { title: 'Green Points', description: '0', icon: <Image style={styles.cardIcon} source={require('../assets/location.png')} /> },
      ];
      
      const Card = ({ icon, title, description }) => {
        return (
          <View className="rounded-lg p-1 mx-0 text-center flex flex-row justify-center items-center">

            <View className="mb-2 mr-1">{icon}</View>

            <View>
            <Text className="text-xs">{description}</Text>
            <Text className="text-xs mb-1" style={styles.smallText}>{title}</Text>
            
            </View>

          </View>
        );
      };


      const options = [
        { id: 1, name: 'Settings', icon: require('../assets/Settings.png') },
        { id: 2, name: 'Ride History', icon: require('../assets/History.png') },
        { id: 3, name: 'FEV Coins', icon: require('../assets/flogo.png') },
        { id: 4, name: 'Offers', icon: require('../assets/offers.png') },
        { id: 5, name: 'Ride Charges', icon: require('../assets/payroll.png') },
        { id: 6, name: 'Refer & Earn', icon: require('../assets/salesman.png') },
        { id: 7, name: 'Contact Us', icon: require('../assets/profile.png') },
        { id: 8, name: 'Logout', icon: require('../assets/log_out.png') },
      ];
      
      const OptionItem = ({ item }) => (
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.iconContainer}>
            <Image source={item.icon} style={styles.icon} />
          </View>
          <Text style={styles.optionText}>{item.name}</Text>
        </TouchableOpacity>
      );


  return (
    <View className="h-full">
    <ScrollView>

    <LinearGradient
        colors={['#FFE450', 'rgba(249, 249, 248, 0.960417)', 'rgba(217, 217, 217, 0)']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.9999, 1]} // Adjust locations to match the CSS gradient
        style={styles.card}
        className="p-2 m-4"
      >
      <View
        className="translate-y-0 h-40"
      >

       <View className="flex flex-row space-x-6 > * + * ">

       <Image
            source={require("../assets/fevlogo.png")}
            className="-translate-y-6"
          />
        
        <View className="translate-y-6 flex flex-col items-end">
           <TouchableOpacity className="">
           <Image
            source={require("../assets/edit_icon.png")}
            className=""
          />
           </TouchableOpacity>
          <Text className="text-xl">8233434678</Text>
          </View>

       </View>

        <View
          className=" flex flex-row justify-center item-center p-1 rounded-3xl w-20 h-20 translate-x-48 -translate-y-20 ml-10"
          style={{ backgroundColor: "#4cdfff" }}
        >
          <Image
            source={require("../assets/profileIcon.png")}
            className="-translate-y-0.5"
          />
        </View>


        <View className="flex flex-row justify-between px-0 mt-0 -translate-x-2 -translate-y-16">
      {data.map((item, index) => (
        <Card key={index} icon={item.icon} title={item.title} description={item.description} />
      ))}
    </View>
      </View>

      </LinearGradient>
    
    
    
      <View className="m-4">

     {options.map((item)=>(
      <TouchableOpacity style={styles.optionContainer} key={item.id}>
          <View style={styles.iconContainer}>
            <Image source={item.icon} style={styles.icon} />
          </View>
          <Text style={styles.optionText}>{item.name}</Text>
        </TouchableOpacity>
     ))}
    </View>
    
    </ScrollView>
    </View>
    
  );
};

export default menu;

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        padding: 20,
        elevation: 5, // Shadow effect
      },
    smallText:{
        fontSize:10
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
      },
      iconContainer: {
        backgroundColor: '#ffe147',
        borderRadius: 6,
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        elevation: 4, // Box shadow effect
      },
      icon: {
        width: 30,
        height: 30,
      },
      optionText: {
        fontSize: 16,
        fontWeight:'400',
        marginLeft:20
      },

});
