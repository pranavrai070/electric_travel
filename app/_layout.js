import { StyleSheet, Text, View } from 'react-native'
import { Slot,Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="business" options={{headerShown:false}}/>
        <Stack.Screen name="verification" options={{headerShown:false}}/>
        <Stack.Screen name="password" options={{headerShown:false}}/>
        <Stack.Screen name="kycPersonalDetails" options={{headerShown:false}}/>
        <Stack.Screen name="signupOption" options={{headerShown:false}}/>
        <Stack.Screen name="signup" options={{headerShown:false}}/>
    </Stack>
  )
}

export default RootLayout;

