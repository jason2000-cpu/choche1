import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen() {
  return (
<View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
        <View >
            <Ionicons name="person" size={100} color="black" />
          <Text style={styles.userTypeText}>Passenger</Text>
        </View>
        <View>
            <Ionicons name="person" size={100} color="black" />
          <Text style={styles.userTypeText}>Driver</Text>
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
      {/* <View style={{ flexDirection:'row',justifyContent: 'flex-end', alignItems:'baseline', }}>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Don't have and Account?  </Text>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Create Account</Text>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009245',
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 40
    
      },
    userTypeText: {
        fontSize: 20,
        color: '#F0F0F0',
        fontWeight: 'bold'
    }
})