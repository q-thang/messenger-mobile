import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register, ForgotPassword} from '@screens/index';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {ActivityIndicator, View} from 'react-native';
// import {UserContext} from '../store/contexts/user.context';
// import {useContext} from 'react';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  //   const {userState, dispatchUser} = useContext(UserContext);

  //   const getUserData = async () => {
  //     try {
  //       const tokenData = await AsyncStorage.getItem('token');
  //       const authId = await AsyncStorage.getItem('authId');
  //       if (authId !== null && tokenData !== null) {
  //         await dispatchUser({
  //           type: 'LOGGED_IN_SUCCESSFUL',
  //           value: {
  //             isLoading: false,
  //             isAuthenticated: true,
  //             displayName: '',
  //             email: '',
  //             phoneNumber: '',
  //             authId: authId,
  //             token: tokenData,
  //           },
  //         });
  //       } else {
  //         await dispatchUser({
  //           type: 'LOGIN_FAILED',
  //         });
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   useEffect(() => {
  //     getUserData();
  //   }, []);

  //   if (userState.isLoading) {
  //     return (
  //       <View
  //         style={{
  //           marginTop: 300,
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //         }}>
  //         <ActivityIndicator color="#0C090D" size="large" />
  //       </View>
  //     );
  //   }

  //   console.log(userState);
  return (
    <Stack.Navigator>
      {/* {userState.isAuthenticated === false ? ( */}
      <>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login', headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Register', headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{title: 'Forgot Password', headerShown: false}}
        />
      </>
      {/* ) : (
        <> */}
      {/* <Stack.Screen
            name="welcome-home"
            component={HomeScreen}
            options={{title: 'Home', headerShown: false}}
          />
          <Stack.Screen
            name="edit-profile"
            component={EditProfileScreen}
            options={{title: 'Edit Profile', headerShown: false}}
          /> */}
      {/* </> */}
      {/* )} */}
    </Stack.Navigator>
  );
};
