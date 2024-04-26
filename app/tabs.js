// import React from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// const Home = require("../assets/home.png");
// const Rupee = require("../assets/rupee.png");
// const Help = require("../assets/help.png");
// const Dot = require("../assets/dot.png");

// function Tabs() {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.tabContainer} onPress={() => console.log("Home clicked")}>
//         <View style={styles.tabs}>
//           <Image style={styles.image} source={Home} />
//         </View>
//         <Text>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.tabContainer} onPress={() => console.log("FEV Money clicked")}>
//         <View style={styles.tabs}>
//           <Image style={styles.image} source={Rupee} />
//         </View>
//         <Text>FEV Money</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.tabContainer} onPress={() => console.log("Get Help clicked")}>
//         <View style={styles.tabs}>
//           <Image style={styles.image} source={Help} />
//         </View>
//         <Text>Get Help</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.tabContainer} onPress={() => console.log("Menu clicked")}>
//         <View style={styles.tabs}>
//           <Image style={styles.image} source={Dot} />
//         </View>
//         <Text>Menu</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default Tabs;

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//   },

//   tabContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 5,
//   },
//   tabs: {
//     width: 40,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
const Home = require("../assets/home.png");
const Rupee = require("../assets/rupee.png");
const Help = require("../assets/help.png");
const Dot = require("../assets/dot.png");

function Tabs() {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    // You can add navigation or other logic here
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => handleTabPress("Home")}
      >
        <View style={[styles.tabs, activeTab === "Home" && styles.activeTab]}>
          <Image style={styles.image} source={Home} />
        </View>
        <Text
          style={[styles.tabText, activeTab === "Home" && styles.activeTabText]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => handleTabPress("FEV Money")}
      >
        <View
          style={[styles.tabs, activeTab === "FEV Money" && styles.activeTab]}
        >
          <Image style={styles.image} source={Rupee} />
        </View>
        <Text
          style={[
            styles.tabText,
            activeTab === "FEV Money" && styles.activeTabText,
          ]}
        >
          FEV Money
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => handleTabPress("Get Help")}
      >
        <View
          style={[styles.tabs, activeTab === "Get Help" && styles.activeTab]}
        >
          <Image style={styles.image} source={Help} />
        </View>
        <Text
          style={[
            styles.tabText,
            activeTab === "Get Help" && styles.activeTabText,
          ]}
        >
          Get Help
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => handleTabPress("Menu")}
      >
        <View style={[styles.tabs, activeTab === "Menu" && styles.activeTab]}>
          <Image style={styles.image} source={Dot} />
        </View>
        <Text
          style={[styles.tabText, activeTab === "Menu" && styles.activeTabText]}
        >
          Menu
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Tabs;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  tabContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  tabs: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
  },
  activeTab: {
    borderColor: "#48DEFF",
    borderWidth: 1,
    borderRadius: 5,
  },
  activeTabText: {
    color: "#48DEFF",
  },
});
