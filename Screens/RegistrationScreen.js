import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "../../../ReactNativeApp/ReactN/Components/Avatar";

export const RegistrationScreen = () => {
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
            onPress={() => Alert.alert("Simple Button pressed")}
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
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingLeft: 16,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    marginHorizontal: 40,
    color: "#f0f8ff",
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    width: 343,
    fontSize: 16,
    lineHeight: 19, 
  },
  form: {
    // flex: 3,
    justifyContent: "flex-end",
    position: 'relative',
    paddingBottom: 45,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  text: {
    // fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 32,
  },
  button: {
    marginTop: 27,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 100,
    width: 343,
  },
  textTitel: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19,
  },
  viewForText: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
  inputWraper: {
    position: "relative",
  },
  buttonShow: {
    position: "absolute",
    top: 14,
    right: 55,
  },
});