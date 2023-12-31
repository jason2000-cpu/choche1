import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './SignIn';
import Login from './Login';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Login} />
        <Drawer.Screen name="Notifications" component={SignIn} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}