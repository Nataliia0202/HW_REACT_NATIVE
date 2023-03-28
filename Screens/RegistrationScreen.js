import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  Platform,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
const imageBg = require("../../../ReactNativeApp/ReactN/assets/images/PhotoBG.jpg");
import { useDispatch } from "react-redux";
import { register } from "../../../ReactNativeApp/ReactN/redux/userOperations";
import SVGImg from "../../../ReactNativeApp/ReactN/assets/images/add.svg";

import * as ImagePicker from "expo-image-picker";
import { uploadPhotoToStorage } from "../../../ReactNativeApp/ReactN/redux/userOperations";

export const RegistrationScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isShowkeyboard, setIsShowkeyboard] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.form}>
        <Avatar />
        <Text style={styles.text}>Регистрация</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Логин"
            onFocus={() => setIsShowkeyboard(true)}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Адрес электронной почты"
            onFocus={() => setIsShowkeyboard(true)}
          />
        </View>
        <View style={styles.inputWraper}>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            onFocus={() => setIsShowkeyboard(true)}
          />

                <TouchableOpacity
                  style={styles.buttonShow}
                  onPress={showPassword}
                >
                  <Text style={styles.viewForText}>Показать</Text>
                </TouchableOpacity>
              </View>

        
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.textTitel}> Зарегистрироваться </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Simple Button pressed")}>
          <Text style={styles.viewForText}>Уже есть аккаунт? Войти</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingLeft: 16,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,

    color: "#212121",
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    // width: 343,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  form: {
    justifyContent: "flex-end",
    position: "relative",
    // marginHorizontal: 16,
    alignItems: "stretch",

    backgroundColor: "#FFFFFF",
    height: 520,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  text: {
    fontFamily: "Roboto-Bold",

    fontSize: 30,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 32,

    fontWeight: "500",
  },
  button: {
    marginTop: 27,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 100,
    width: 343,
    flexDirection: "row",
    alignSelf: "center",
  },
  textTitel: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  viewForText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    paddingBottom: 45,
    fontFamily: "Roboto-Regular",
    flexDirection: "row",
    alignSelf: "center",
  },
  inputWraper: {
    position: "relative",
  },
  buttonShow: {
    position: "absolute",
    top: 14,
    right: 25,
  },
  contentContainer: {
    paddingTop: 105,
  },
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
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
