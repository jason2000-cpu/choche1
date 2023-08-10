import { Text, View } from 'react-native'

import { NativeRouter, Route, Link } from "react-router-native";

import HomeScreen from './Home';
import Login from '../Login';
import SignIn from '../SignIn';
import History from './History';
import WelcomeScreen from '../Welcome';





const RouteStack = () => {
  return (
    <NativeRouter>
    <View>
      <View>
        {/* Define our links. They are like anchor tags */}
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/history">
          <Text>History</Text>
        </Link>
      </View>
      {/*Define our routes for this project*/}
      <Route exact path="/" component={HomeScreen} />
      <Route path="/history" component={History} />
    </View>
    {/*The NativeRouter*/}
  </NativeRouter>
  );
};

export default RouteStack;