import { Text, View } from 'react-native'

// import { NativeRouter, Route, Link } from "react-router-native";

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './Home';
import Login from '../Login';
import SignIn from '../SignIn';
import History from './History';
import WelcomeScreen from '../Welcome';
import CustomDrawerNav from './CustomDrawerNav';





const RouteStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      // options={{title: none}}
    />
    <Stack.Screen name="onboard" component={WelcomeScreen}  />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="history" component={History} />
    <Stack.Screen name="CustomDrawerNav" component={CustomDrawerNav} />

  </Stack.Navigator>
  );
};

export default RouteStack;