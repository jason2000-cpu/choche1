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

import { Ionicons, FontAwesome5, FontAwesome, AntDesign, Fontisto, MaterialIcons  } from '@expo/vector-icons';
import mapImage from '../../assets/mapImage.png';
import userImg from '../../assets/amina.jpeg';
import CustomDrawerNav from './CustomDrawerNav';

const Home = ({ navigation }) => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const [location, setLocation] = useState('');

  // const navigationView = () => (
  //   <View style={[styles.navCont, styles.navigationContainer,]}>
  //       <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 5}}>
  //           <Ionicons name="arrow-back" size={24} color="white" onPress={() => drawer.current.closeDrawer()}/>
  //       </View>
  //     <View>
  //       <View style={{ margin: 10}}>
  //           {/* <Ionicons name="person" size={35} color="black" /> */}
  //           <Image source={userImg} style={{height: 50, width: 50, borderRadius: 50}} />
  //           <View style={{marginLeft: 10}}>
  //               <Text style={{fontWeight: 'bold', color:'white', marginVertical: 10}}>Amina</Text>
  //           </View>
  //       </View>
  //       <View style={{flexDirection: 'row', borderWidth: 1, width: 100,justifyContent:'space-between', marginHorizontal: 10, backgroundColor: 'white', borderRadius: 10,parddingVertical: 10, paddingHorizontal: 5, alignItems:'center'}}>
  //           <Text style={{fontSize: 15}}>Change</Text>
  //           <FontAwesome5 name="edit" size={24} color="black" />
  //       </View>
  //       <View style={{backgroundColor:'#009245',height:170, marginVertical: 15, paddingVertical: 10, paddingHorizontal: 20 }}>
  //         <View style={{flexDirection:'row',}}>
  //           <FontAwesome5 name="coins" size={24} color="white" />
  //           <Text style={{color: 'white', fontSize: 18, marginLeft: 5}}>Current Balance</Text>
  //         </View>
  //         <View style={{marginLeft: 10, marginVertical: 10}}>
  //           <Text style={{fontSize: 25, fontWeight: 'bold'}}>6,500 Points</Text>
  //         </View>
  //         <View style={{ marginLeft: 10}}>
  //           <Text style={{fontSize: 15, }}>Due 26th April 2023</Text>
  //         </View>
  //       </View>
  //       <View>
  //         <View style={styles.nav}>
  //            <FontAwesome name="home" size={24} color="red" />
  //            <Text style={styles.IconText}>Home</Text>
  //         </View>
  //         <View style={styles.nav}>
  //               <FontAwesome5 name="history" size={24} color="red" />
  //               <Text style={styles.IconText} onPress={()=>{navigation.navigate('history')}}>History</Text>
  //         </View>
  //       </View>
  //       <View>
  //         <View style={styles.nav}>
  //             <FontAwesome5 name="cog" size={24} color="red" />
  //             <Text style={styles.IconText} >Settings</Text>
  //         </View>
  //         <View style={styles.nav}>
  //             <MaterialIcons name="support-agent" size={24} color="red" />
  //             <Text style={styles.IconText}>Online Support</Text>
  //         </View>
  //         <View style={styles.nav}>
  //             <FontAwesome5 name="sign-out-alt" size={24} color="red" />
  //             <Text style={styles.IconText}>Logout</Text>
  //         </View>
  //       </View>
  //     </View>
  //   </View>
  // );



  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition='left'
      renderNavigationView={CustomDrawerNav}>
      <View style={styles.container}>
      <View style={{position:'absolute', zIndex: 1, margin: 10}}>
         <Ionicons name="md-menu-outline" size={24} color="white" onPress={() => drawer.current.openDrawer()} />
      </View>
        <View style={{flex: 1}}>
            <Image source={mapImage} style={{height: 500}} />
        </View>
        <View style={styles.bottom}>
            <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>Good Morning Amina</Text>
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
                <Fontisto name="favorite" size={24} color="black"  style={{marginTop: 10}} />
                <Text style={{ marginTop: 6, marginLeft: 10, fontWeight: 'bold'}}>Favorites</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
                <MaterialIcons name="work" size={24} color="black"  style={{marginTop: 10}}/>
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
    marginTop: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 10,
  },
  // navigationContainer: {
  //   marginTop: 20,
  //   backgroundColor: '#080d0a',
  //   height: '100%',
  // },
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
      },
      // IconText: {
      //   fontSize: 18,
      //   fontWeight:'bold',
      //   color: 'white',
      //   marginLeft: 10,
      //   // marginTop: 5
      // },
      // nav: {
      //   marginTop: 20,
      //   flexDirection: 'row'
      // }
});

export default Home;