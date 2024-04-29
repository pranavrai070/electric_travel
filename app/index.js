import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (

    <View className="flex-1 items-center justify-center bg-red-300">
      <Text className="text-3xl">Open up App.js start app!</Text>
      <StatusBar style="auto" />

      <Link href="/tabs" style={{color:"blue"}}>Tabs</Link>
      <Link href="/home" style={{color:"blue"}}>Home</Link>
      <Link href="/profile" style={{color:"blue"}}  className='text-3xl'>Go to Profile</Link>
      <Link href="/completeProfile" style={{color:"blue"}}>Complete Profile</Link>
      <Link href="/login" style={{color:"blue"}}>Go to Login</Link>
      <Link href="/barcode" style={{color:"blue"}}>Go to Barcode</Link>
      <Link href="/rideStart" style={{color:"blue"}}>Ride start</Link>
      <Link href="/kyc" style={{color:"blue"}}>KYC</Link>
      <Link href="/business" style={{color:"blue"}}>Business</Link>

      <Link href="/signup" style={{color:"blue"}}>Go to SignUp</Link>
      <Link href="/password" style={{color:"blue"}}>Go to Create Password</Link>
      <Link href="/verification" style={{color:"blue"}}>Go to Verification</Link>
      <Link href="/help" style={{color:"blue"}}>Go to get help</Link>
      <Link href="/menu" style={{color:"blue"}}  className='text-3xl'>Go to menu</Link>
      <Link href="/offer" style={{color:"blue"}}  className='text-3xl'>Go to Offers</Link>
      <Link href="/takePhoto" style={{color:"blue"}}  className='text-3xl'>Go to Take Photo</Link>
      <Link href="/feedback" style={{color:"blue"}}  className='text-3xl'>Go to Feedback</Link>
      <Link href="/payment" style={{color:"blue"}}  className='text-3xl'>Go to Payment</Link>
    </View>
  );
}

