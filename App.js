import React, { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
// import { Route } from "./router";
import { Provider } from "react-redux";
import { store } from "../../ReactNativeApp/ReactN/redux/store";
import { StyleSheet, Text, View, ImageBackground, StatusBar, Dimensions } from "react-native";
import { RegistrationScreen } from "../../ReactNativeApp/ReactN/Screens/RegistrationScreen";

import "../../ReactNativeApp/ReactN/firebase/config";
// import { NavigationContainer } from "@react-navigation/native";
// import { Route } from "../../ReactNativeApp/ReactN/router";
import { Login } from "../../ReactNativeApp/ReactN/Screens/LoginScreen"; 

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);



useEffect(() => {
  async function prepare() {
    try {
     await Font.loadAsync({
       "Roboto-Regular": require("../../ReactNativeApp/ReactN/assets/fonts/Roboto-Regular.ttf"),
       "Roboto-Bold": require('../../ReactNativeApp/ReactN/assets/fonts/Roboto-Bold.ttf')
     });
      
    } catch (e) {
      console.warn(e);
    } finally {
      
      setAppIsReady(true);
    }
  }

  prepare();
}, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (appIsReady === false) {
    return null;
  }

  
  return (
    <Provider store={store}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <RegistrationScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backfaceVisibility: "#fff",
  },
  
});
