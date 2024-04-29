import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';



const MyComponent = () => {

    const data = [
        { title: '1 days', price: '₹ 299/day' },
        { title: '2 days', price: '₹ 249/day' },
        { title: '3-7 days', price: '₹ 199/day' },
        { title: '8-15 days', price: '₹ 189/day' },
        { title: '16-30 days', price: '₹ 189/day' },
      ];

  return (


    <View style={styles.container}>
      
      <View style={styles.view1}>

      <Text style={styles.Title}>Lease Model</Text>
    
        {/* First View */}
          {/* First Card */}
          <View style={styles.card}>
          <Image style={styles.image} source={require('../../assets/newLease.png')} />
            <Text style={styles.cardTitle}>₹ 0000</Text>
            <Text style={styles.text}>base charge</Text>
            <Text style={styles.text1}>Daily</Text>
          </View>

          {/* Second Card */}
          <View style={styles.card}>
          <Image style={styles.image} source={require('../../assets/newLease.png')} />
            <Text style={styles.cardTitle}>₹ 0000</Text>
            <Text style={styles.text}>base charge</Text>
            <Text style={styles.text1}>Weekly</Text>
          </View>

          {/* Third Card */}
          <View style={styles.card}>
            <Image style={styles.image} source={require('../../assets/newLease.png')} />
            <Text style={styles.cardTitle}>₹ 0000</Text>
            <Text style={styles.text}>base charge</Text>
            <Text style={styles.text1}>Monthly</Text>
            <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Auto Renewal</Text>
        </TouchableOpacity>
          </View>
        </View>



      {/* Second View */}
      <View style={styles.view2}>

    <View style={styles.head}> 
     <Image style={styles.logo} source={require('../../assets/fevLogoq.png')} />
     <Text style={styles.T2}>Daily</Text>
    </View>

    {data.map((item, index) => (
            <View key={index}>
              <View style={styles.head}>
                <Text style={styles.T1}>{item.title}</Text>
                <Text style={styles.T2}>{item.price}</Text>
              </View>
              {/* Add a line */}
              <View style={styles.line} />
            </View>
          ))}


</View>

</View>

   
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  Title:{
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 20,
    marginBottom: 10
    
  },
  view1: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  view2: {
    // height: 200,
    backgroundColor: '#4CDFFF', // Just for visualization, you can remove this
    flexDirection:'column',
    paddingHorizontal: 20,
    borderRadius: 20,
    paddingBottom: 25


  },
  head:{
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   paddingVertical: 10,
   fontWeight: 'bold',
  },
  image:{
     width: 59,
     height: 41,
  },
  card: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    height:100,
    paddingLeft: 20,
    paddingVertical: 10,
 },
  cardTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  text:{
    marginTop: 5,
  },
  text1:{
    position:'absolute',
    right:20,
    top:10,
    fontWeight:'bold',
    fontSize: 20
  },
  T1: {
    fontSize: 16,
    // fontWeight: 'bold',
    // marginBottom: 5,
  },
  T2: {
    fontSize: 16,
    fontWeight: 'bold',
    // marginBottom: 5,
  },
  line: {
    height: 1,
    backgroundColor: 'black',
  },
  loginButton: {
    backgroundColor: "#FFDF3C",
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: "center",
    width: '40%',
    borderWidth: 2,
    borderColor: "lightgrey",
    position: 'absolute',
    right: 10,
    bottom: 10

  },
  buttonText: {
    color: "#000000",
    fontSize: 12,
    fontWeight: 'bold'
  },
});
