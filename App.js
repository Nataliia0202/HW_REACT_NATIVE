import React from "react";
//   
import { StyleSheet, Text, View, ImageBackground, StatusBar } from "react-native";
import { RegistrationScreen } from "../../ReactNativeApp/ReactN/Screens/RegistrationScreen";
const imageBg = require('../../../../ReactNativeApp/ReactN/assets/images/PhotoBG.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageBg} resizeMode="cover" style={styles.image}>
        <RegistrationScreen/>
      </ImageBackground>
      <StatusBar theme="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backfaceVisibility: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    justifyContent: "flex-end",
  },
});
