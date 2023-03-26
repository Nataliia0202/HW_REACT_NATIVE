import React, { useEffect } from "react";
import { Login } from "../../ReactNativeApp/ReactN/Screens/LoginScreen";
import { RegistrationScreen } from "../../ReactNativeApp/ReactN/Screens/RegistrationScreen";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { refreshUser } from "../../ReactNativeApp/ReactN/redux/sliceAuth";


const Stack = createStackNavigator();


export const Route = () => {
    const dispatch = useDispatch();
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                const { displayName, email, uid, accessToken } = user;
                dispatch(
                    refreshUser({
                        name: displayName,
                        email: email,
                        id: uid,
                        token: accessToken,
                    })
                );
            } else {
                console.log("User is signed out");
            }
        });
    }, []);

    const isAuth = useSelector((state) => state.auth.isAuth);
    console.log(isAuth);
    if (isAuth === false) {
        return (
          <Stack.Navigator initialRouteName="Регистрация" style={styles.nav}>
            <Stack.Screen
              name="Регистрация"
              options={{
                headerStyle: {
                  backgroundColor: "transparent",
                },
                headerShown: false,
              }}
              component={RegistrationScreen}
            />
            <Stack.Screen name="Логин" component={Login} />
          </Stack.Navigator>
        );
        // } else {
        //   return (
        //     <Stack.Navigator initialRouteName="home" style={styles.nav}>
        //       <Stack.Screen
        //         name="home"
        //         component={Home}
        //         options={{ headerShown: false }}
        //       />
        //       <Stack.Screen name="Map" component={Map} />
        //       <Stack.Screen name="CommentsScreen" component={CommentsScreen} />
        //       <Stack.Screen name="PostItem" component={PostItem} />
        //     </Stack.Navigator>
        //   );
        // }
    };


}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },

  nav: {
    padding: 16,
    
  },
});