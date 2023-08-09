import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  TextInput
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import mapImage from '../../assets/mapImage.png';
import userImg from '../../assets/amina.jpeg';

const Home = ({ navigation }) => {
  // const drawer = useRef(null);
//   const [drawerPosition, setDrawerPosition] = useState('left');
    const [location, setLocation] = useState('');

  const navigationView = () => (
    <View style={[styles.navCont, styles.navigationContainer]}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 5}}>
            <Ionicons name="arrow-back" size={24} color="black" onPress={() => navigation.closeDrawer()}/>
        </View>
      <View>
        <View style={{ margin: 10}}>
            {/* <Ionicons name="person" size={35} color="black" /> */}
            <Image source={userImg} style={{height: 50, width: 50, borderRadius: 50}} />
            <View style={{marginLeft: 10}}>
                <Text style={{fontWeight: 'bold'}}>Amina</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', borderWidth: 1, width: 70, marginHorizontal: 10, backgroundColor: 'white', borderRadius: 10}}>
            <Text>Change</Text>
            <Ionicons name="pencil" size={15} color="black" />
        </View>
      </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      // ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
      <View style={{position:'absolute', zIndex: 1, margin: 10}}>
         <Ionicons name="md-menu-outline" size={24} color="white" onPress={() => navigation.openDrawer()} />
      </View>
        <View style={{flex: 1}}>
            <Image source={mapImage} style={{height: 500}} />
        </View>
        <View style={styles.bottom}>
            <Text style={{color: 'black', fontSize: 30}}>Good Morning Amina</Text>
            <View>
                <TextInput
                    placeholder="Where to?"
                    style={styles.textInput}
                    name="destination"
                    onChangeText={(text) => setLocation(text)}
                />
            </View>
            <View>
                <View >
                    <View style={{flexDirection:'row', marginTop: 10}}>
                        <Ionicons name="location" size={35} color="black" />
                        <View style={{marginLeft: 10}} >
                            <Text style={{fontWeight:'bold'}}>Utawala, Embakasi</Text>
                            <Text>Astrol Petrol Station, Estern Bypass, Embakasi</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginTop: 10, }}>
                       <Ionicons name="location" size={20} color="black" />
                       <View style={{marginLeft: 5}}>
                            <Text style={{fontWeight:'bold'}}>Imara Daima, Mombasa Road</Text>
                            <Text>Astrol Petrol Station, Eastern Bypass, Embakasi</Text>
                       </View>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.btm}>
            <View style={{flexDirection: 'row',}}>
                <Ionicons name="timer-outline" size={35} color="black" />
                <Text style={{ marginTop: 6, marginLeft: 10}}>Favorites</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
                <Ionicons name="timer-outline" size={35} color="black" />
                <View style={{marginTop: 6, marginLeft: 10,}}>
                   <Text style={{  fontWeight: 'bold'}}>Work</Text>
                   <Text>Astrol Petrol Station Eastern Bypass Embakasi</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
                <Ionicons name="home-sharp" size={24} color="black" />
                <View style={{marginLeft: 10,}}>
                     <Text style={{  fontWeight: 'bold'}}>Home</Text>
                     <Text>Astrol Petrol Station Eastern Bypass Embakasi</Text>
                </View>
            </View>
        </View>

      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 10,
  },
  navCont: {
    marginTop: 20,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: 'white'
  },
  bottom: {
    // position: 'absolute',
    bottom: 0,
    top: 350,
    // borderWidth: 1,
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor:'#009245',
    height: 300
  },
  btm: {
        position: 'absolute',
        bottom: 0,
        top: 580,
        height: 100,
        // borderWidth: 1,
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }
});

export default Home;