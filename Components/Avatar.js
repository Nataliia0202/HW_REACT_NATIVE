import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import SVGImg from "../../../ReactNativeApp/ReactN/assets/images/add.svg";
// const image = require("uri: https://cdn-icons-png.flaticon.com/512/2922/2922506.png");

export const Avatar = () => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <TouchableOpacity style={styles.svg}>
          <SVGImg width={25} height={25} />
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    paddingTop: 30,
    borderRadius: 16,
    top: -90,
  },
  tinyLogo: {
    width: 120,
    height: 120,
  },
    svg: {
        position: 'absolute',
        bottom: 14,
        right: -12,
  }
});