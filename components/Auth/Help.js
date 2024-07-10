import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
const Help = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text1}>Help & Support</Text>
     <View style={styles.cardContainer}>
        {/* First Card */}
        <LinearGradient
          colors={["rgba(77, 223, 255, 1)","rgba(217, 217, 217, 0)"]}
          style={styles.cardOne}
        >
            <View >
        <Image style={styles.image} source={require('../../assets/newLease.png')} />
          <Text style={styles.cardTitle}>Lease</Text>
        </View>
        </LinearGradient>
      

        {/* Second Card */}
        <LinearGradient
          colors={["rgba(255, 227, 73, 1)","rgba(217, 217, 217, 0)"]}
          style={styles.cardTwo}
        >
           <View  >
        <Image style={styles.image} source={require('../../assets/newRide.png')} />
          <Text style={styles.cardTitle}>Ride Now</Text>
          {/* Add any other content you want for the second card */}
        </View>
        </LinearGradient>
       
        
      </View>
      <Text style={styles.Text2}>How to use ?</Text>
      <Text style={styles.Text3}>recommended help</Text>      
      <View style={styles.tab}>
        <Text style={styles.Text4}>how to use EV Dex</Text>
        <Image style={styles.arrow} source={require('../../assets/blackArrow.png')} />
      </View>
      <View style={styles.line}></View>
      <View style={styles.tab}>
        <Text style={styles.Text4}>Refunding the Security Deposit</Text>
        <Image style={styles.arrow} source={require('../../assets/blackArrow.png')} />
      </View>
      <View style={styles.line}></View>
      <View style={styles.tab}>
        <Text style={styles.Text4}>the battery discharged completely during my ride</Text>
        <Image style={styles.arrow} source={require('../../assets/blackArrow.png')} />
      </View>
      <View style={styles.line}></View>
      <View style={styles.tab}>
        <Text style={styles.Text4}>rate Card</Text>
        <Image style={styles.arrow} source={require('../../assets/blackArrow.png')} />
      </View>
      <View style={styles.line}></View>
      <View style={styles.chat}>
      <Image source={require('../../assets/chat.png')} />
      <Text  style={styles.Text5}>Chat with us</Text>
      <Image style={styles.arrow} source={require('../../assets/blackArrow.png')} />
      </View>
      <View style={styles.search}>
      <Image style={styles.searchIcon}source={require('../../assets/Search.png')} />
      <TextInput  style={styles.Text6}>Search your query here</TextInput>
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  Text1: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  Text2: {
    fontSize: 20,
    fontWeight: '500',
    textAlign:'right',
    marginTop: 15
    
  },
  Text3: {
    fontSize: 24,
    fontWeight: '500',
    marginTop: 15
  },
  Text4: {
    fontSize: 20,
    flex: 0.8,
    color: '#434343',
    fontWeight: '500',
  },
  Text5: {
    fontSize: 18,
    flex: 0.8,
    color: '#434343',
    fontWeight: '500',
  },
  Text6: {
    justifyContent:'space-between',
    fontWeight: '500',
    fontSize: 16,
    color: '#b9b9b9',
  },
  tab: {
    justifyContent:'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center'
  },
  chat: {
    justifyContent:'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 9,
    marginTop: 20,
    paddingLeft: 10,
    borderColor: 'lightgrey',
  },
  search: {
    borderWidth: 2,
    borderRadius: 11,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    marginTop: 20,
    alignItems:'center',
    paddingVertical: 10,
    gap: 10,
    
  },
  searchIcon: {
    marginLeft: 10
  },
  cardContainer: {
    flexDirection: 'row', // Arrange cards horizontally
    gap: 10,
    marginTop: 30
  },
  cardOne: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#4DDFFF',
    borderRadius: 10,
    // elevation: 4, // Add elevation for shadow (Android)
    // shadowColor: '#000000', // Shadow color (iOS)
    // shadowOpacity: 0.2, // Shadow opacity (iOS)
    // shadowOffset: { width: 0, height: 2 }, // Shadow offset (iOS)
    // shadowRadius: 4, // Shadow radius (iOS)
  },
  cardTwo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    // backgroundColor: '#FFE349',
    borderRadius: 10,
    // elevation: 4, // Add elevation for shadow (Android)
    // shadowColor: '#000000', // Shadow color (iOS)
    // shadowOpacity: 0.2, // Shadow opacity (iOS)
    // shadowOffset: { width: 0, height: 2 }, // Shadow offset (iOS)
    // shadowRadius: 4, // Shadow radius (iOS)
  },
  cardTitle: {
    fontSize: 20,
    color:'black',
  },
  line: {
    height: 1,
    backgroundColor: 'grey',
  },
});
