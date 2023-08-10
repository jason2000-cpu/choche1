import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NativeRouter, Route, Routes, Router } from "react-router-native";
import { Link } from 'react-router-native';

import { NavigationContainer } from '@react-navigation/native';


// Screen imports
import RouteStack from './Screens/Passenger/RouteStack';
import HomeScreen from './Screens/Passenger/Home';
import History from './Screens/Passenger/History';
import WelcomeScreen from './Screens/Welcome';
import Login from './Screens/Login';
import SignIn from './Screens/SignIn';

export default function App() {
  return (
    <NavigationContainer>
        <RouteStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
