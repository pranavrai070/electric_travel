import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View,} from 'react-native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Electric V</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
