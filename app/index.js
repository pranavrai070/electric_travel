import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (

    <View className="flex-1 items-center justify-center bg-red-300" >
      <Text className="text-3xl">Open up App.js start app!</Text>
      <StatusBar style="auto"/>

<<<<<<< HEAD
      <Link href="/tabs" style={{color:"blue", fontSize:16}}>Tabs</Link>
      <Link href="/home" style={{color:"blue",fontSize:16}}>Home</Link>
      <Link href="/profile" style={{color:"blue",fontSize:16}}  className='text-3xl'>Go to Profile</Link>
      <Link href="/completeProfile" style={{color:"blue",fontSize:16}}>Complete Profile</Link>
      <Link href="/login" style={{color:"blue",fontSize:16}}>Go to Login</Link>
      <Link href="/barcode" style={{color:"blue",fontSize:16}}>Go to Barcode</Link>
      <Link href="/rideStart" style={{color:"blue",fontSize:16}}>Ride start</Link>
      <Link href="/kyc" style={{color:"blue",fontSize:16}}>KYC</Link>
      <Link href="/business" style={{color:"blue",fontSize:16}}>Business</Link>

      <Link href="/signup" style={{color:"blue",fontSize:16}}>Go to SignUp</Link>
      <Link href="/password" style={{color:"blue",fontSize:16}}>Go to Create Password</Link>
      <Link href="/verification" style={{color:"blue",fontSize:16}}>Go to Verification</Link>
      <Link href="/help" style={{color:"blue",fontSize:16}}>Go to get help</Link>
      <Link href="/menu" style={{color:"blue",fontSize:16}}  className='text-3xl'>Go to menu</Link>
      <Link href="/offer" style={{color:"blue",fontSize:16}}  className='text-3xl'>Go to Offers</Link>
      <Link href="/takePhoto" style={{color:"blue",fontSize:16}}  className='text-3xl'>Go to Take Photo</Link>
      <Link href="/feedback" style={{color:"blue",fontSize:16}}  className='text-3xl'>Go to Feedback</Link>
      <Link href="/payment" style={{color:"blue",fontSize:16}}  className='text-3xl'>Go to Payment</Link>
=======
      <Link href="/tabs" style={{color:"blue"}}>Tabs</Link>
      <Link href="/home" style={{color:"blue"}}>Home</Link>
      <Link href="/profile" style={{color:"blue"}}  className='text-3xl'>Go to Profile</Link>
      <Link href="/completeProfile" style={{color:"blue"}}>Complete Profile</Link>
      <Link href="/login" style={{color:"blue"}}>Go to Login</Link>
      <Link href="/barcode" style={{color:"blue"}}>Go to Barcode</Link>
      <Link href="/rideStart" style={{color:"blue"}}>Ride start</Link>
      <Link href="/kyc" style={{color:"blue"}}>KYC</Link>
      <Link href="/business" style={{color:"blue"}}>Business</Link>
      <Link href="/signup" style={{color:"blue"}}>SignUp</Link>
      <Link href="/password" style={{color:"blue"}}>Create Password</Link>
      <Link href="/verification" style={{color:"blue"}}>Verification</Link>
      <Link href="/help" style={{color:"blue"}}>get help</Link>
      <Link href="/menu" style={{color:"blue"}}  className='text-3xl'>Go to menu</Link>
      <Link href="/offer" style={{color:"blue"}}  className='text-3xl'>Go to Offers</Link>
      <Link href="/takePhoto" style={{color:"blue"}}  className='text-3xl'>Go to Take Photo</Link>
      <Link href="/feedback" style={{color:"blue"}}  className='text-3xl'>Go to Feedback</Link>
      <Link href="/payment" style={{color:"blue"}}  className='text-3xl'>Go to Payment</Link>
      <Link href="/memberships" style={{color:"blue"}}>Memberships</Link>
>>>>>>> ca54949012a7b4eea8496f5279259ce9053c52fe
    </View>
  );
}

