import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import userImg from '../../assets/amina.jpeg';

import { Ionicons, FontAwesome5, FontAwesome, AntDesign, Fontisto, MaterialIcons  } from '@expo/vector-icons';


export default function CustomDrawerNav({ navigation }) {
  return (
    <View style={[styles.navCont, styles.navigationContainer,]}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 5}}>
            <Ionicons name="arrow-back" size={24} color="white" onPress={() => drawer.current.closeDrawer()}/>
        </View>
      <View>
        <View style={{ margin: 10}}>
            {/* <Ionicons name="person" size={35} color="black" /> */}
            <Image source={userImg} style={{height: 50, width: 50, borderRadius: 50}} />
            <View style={{marginLeft: 10}}>
                <Text style={{fontWeight: 'bold', color:'white', marginVertical: 10}}>Amina</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', borderWidth: 1, width: 100,justifyContent:'space-between', marginHorizontal: 10, backgroundColor: 'white', borderRadius: 10,parddingVertical: 10, paddingHorizontal: 5, alignItems:'center'}}>
            <Text style={{fontSize: 15}}>Change</Text>
            <FontAwesome5 name="edit" size={24} color="black" />
        </View>
        <View style={{backgroundColor:'#009245',height:170, marginVertical: 15, paddingVertical: 10, paddingHorizontal: 20 }}>
          <View style={{flexDirection:'row',}}>
            <FontAwesome5 name="coins" size={24} color="white" />
            <Text style={{color: 'white', fontSize: 18, marginLeft: 5}}>Current Balance</Text>
          </View>
          <View style={{marginLeft: 10, marginVertical: 10}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>6,500 Points</Text>
          </View>
          <View style={{ marginLeft: 10}}>
            <Text style={{fontSize: 15, }}>Due 26th April 2023</Text>
          </View>
        </View>
        <View>
          <View style={styles.nav}>
             <FontAwesome name="home" size={24} color="red" />
             <Text style={styles.IconText}>Home</Text>
          </View>
          <View style={styles.nav}>
                <FontAwesome5 name="history" size={24} color="red" />
                <Text style={styles.IconText} onPress={()=>{navigation.navigate('history')}}>History</Text>
          </View>
        </View>
        <View>
          <View style={styles.nav}>
              <FontAwesome5 name="cog" size={24} color="red" />
              <Text style={styles.IconText} >Settings</Text>
          </View>
          <View style={styles.nav}>
              <MaterialIcons name="support-agent" size={24} color="red" />
              <Text style={styles.IconText}>Online Support</Text>
          </View>
          <View style={styles.nav}>
              <FontAwesome5 name="sign-out-alt" size={24} color="red" />
              <Text style={styles.IconText}>Logout</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    navigationContainer: {
        marginTop: 20,
        backgroundColor: '#080d0a',
        height: '100%',
      },
    IconText: {
        fontSize: 18,
        fontWeight:'bold',
        color: 'white',
        marginLeft: 10,
        // marginTop: 5
      },
      nav: {
        marginTop: 20,
        flexDirection: 'row'
      }
})