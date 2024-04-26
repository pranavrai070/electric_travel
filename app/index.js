import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-300">
      <Text className="text-3xl">Open up App.js start app!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color:"blue"}}  className='text-3xl'>Go to Profile</Link>
      <Link href="/menu" style={{color:"blue"}}  className='text-3xl'>Go to menu</Link>
      <Link href="/offer" style={{color:"blue"}}  className='text-3xl'>Go to Offers</Link>
      <Link href="/takePhoto" style={{color:"blue"}}  className='text-3xl'>Go to Take Photo</Link>
      <Link href="/feedback" style={{color:"blue"}}  className='text-3xl'>Go to Feedback</Link>
      <Link href="/payment" style={{color:"blue"}}  className='text-3xl'>Go to Payment</Link>
    </View>
  );
}

