import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import SVGImg from "../../../ReactNativeApp/ReactN/assets/images/add.svg";

import * as ImagePicker from "expo-image-picker";
import { uploadPhotoToStorage } from "../../../ReactNativeApp/ReactN/redux/userOperations";



export const Avatar = () => {
  const [image, setImage] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const pickImage = async () => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    
    setImage(result.assets[0].uri);
    setAvatar(await uploadPhotoToStorage(result.assets[0].uri));
  };

  return (
    <View style={styles.containerIMG}>
      <Image
        style={styles.avatar}
        source={{
          uri: image,
        }}
      />
      <TouchableOpacity style={styles.svg} onPress={pickImage}>
        <SVGImg width={25} height={25} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerIMG: {
    position: "absolute",
    width: 120,
    height: 120,
    paddingTop: 30,
    borderRadius: 16,
    top: -60,
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
  },
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  svg: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
});