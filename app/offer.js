import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const offer = () => {
  const icons = [
    { id: 1, name: "Whatsapp", icon: require("../assets/whatsapp.png") },
    { id: 2, name: "facebook", icon: require("../assets/facebook.png") },
    { id: 3, name: "telegram", icon: require("../assets/telegram.png") },
    { id: 4, name: "share", icon: require("../assets/share.png") },
  ];

  const OfferData = [
    {
      id: 1,
      mainHeading: "Refer FEV to a friend & get ₹40 FEV coin",
      descriptiveHeading: "When a friend signs up on FEV app using your link:",
      backGroundImage: require("../assets/offer_background2.png"),
      points: [
        "They get an FEV coins of ₹20.",
        "You get an FEV coin of ₹40 when they the first ride.",
      ],
    },
    {
      id: 2,
      mainHeading: "Share code & get a free lease plan extension",
      descriptiveHeading:
        "When a friend applies your code for buying their first lease plan (applicable only on plans for 7 day or more):",
      backGroundImage: require("../assets/offer_background1.png"),
      points: [
        "They get a discount of ₹200.",
        "You get a free 1-day rental plan extension.",
      ],
    },
  ];

  const OfferCard = ({ offerData, icons }) => (
    <View style={styles.mainOfferCard} className="mb-2">

<LinearGradient
        colors={['rgba(72, 222, 255, 0.7)', 'rgba(72, 222, 255, 0)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.5447, 0.9992]} // Adjust locations to match the CSS gradient
        style={styles.offerUpperSection}
      >
    <View>
      <View className="flex flex-row">
        <Text className="font-semibold text-xl w-4/7">{offerData.mainHeading}</Text>
        <Image
          key={offerData.id}
          source={offerData.backGroundImage}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
          className="w-3/7 -translate-x-20 -translate-y-4"
        />
      </View>
      <Text className="-translate-y-8">{offerData.descriptiveHeading}</Text>

      <View style={styles.pointsContainer}>
        {offerData.points.map((point, index) => (
          <View key={index} style={styles.pointContainer}>
            <Text className="font-semibold -translate-y-6" style={styles.pointText}>
              {"\u2022"} {point}
            </Text>
          </View>
        ))}
      </View>

      </View>

      </LinearGradient>



      <View style={styles.shareSection} className="flex flex-row space-x-12 > * + * justify-center items-center">

        <TouchableOpacity style={styles.shareLinkButton} className="justify-center items-center">
          <Text>Share Link</Text>
        </TouchableOpacity>

        <View className="flex flex-row justify-end space-x-2 > * + *">
          {icons.map((icon) => (
            <Image
              key={icon.id}
              source={icon.icon}
              style={{ width: 32, height: 32 }}
              resizeMode="contain"
            />
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <View className="m-4">
      <FlatList
        data={OfferData}
        renderItem={({ item }) => <OfferCard offerData={item} icons={icons} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default offer;

const styles = StyleSheet.create({
  mainOfferCard: {
    borderRadius: 10,
    marginTop: 10,
    borderColor:"#00D1FF",
    borderWidth:1
  },
  shareSection:{
    backgroundColor:"#ffffff",
    width:"100%",
    height:55,
    borderBottomStartRadius:10,
    borderBottomEndRadius:10
  },
  offerUpperSection:{
    padding:20,
    borderTopStartRadius:10,
    borderTopEndRadius:10,
    height:230,
  },
  shareLinkButton:{
    backgroundColor: '#ffffff',
    height:40,
    width:"30%",
    borderWidth:1,
    borderColor: '#00D1FF',
    borderRadius:10,
  }
});
