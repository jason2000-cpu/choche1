import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NativeRouter, Route, Link, Routes, Router } from "react-router-native";

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
    <NativeRouter>
    <View>
      <View>
        {/* Define our links. They are like anchor tags */}
        <Link to="/">
          <Text>Welocome</Text>
        </Link>
        <Link to="/home">
          <Text>Home</Text>
        </Link>
        <Link to="/history">
          <Text>History</Text>
        </Link>
      </View>
      {/*Define our routes for this project*/}
          <Routes>
              <Route exact  path="/" component={<WelcomeScreen />} />
              <Route  path="/home" component={<HomeScreen />} />
              <Route path="/history" component={<History />} />
          </Routes>
    </View>
    {/*The NativeRouter*/}
  </NativeRouter>
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
