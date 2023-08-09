import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Screen imports
import Welcome from "./Screens/Welcome"
import Login from './Screens/Login';
import SignIn from './Screens/SignIn';
import Home from './Screens/Passenger/Home';

export default function App() {
  return (
    // <Welcome />
    // <Login />
    // <SignIn />
    <Home />
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
