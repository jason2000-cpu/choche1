import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import histIllustration from '../../assets/RideHist.png'
import { AntDesign } from '@expo/vector-icons';

export default function History() {
    const travelHistory = [
        {
            'id': 1,
            'userId': 1,
            'startLocation': 'Thika',
            'endLocation': 'Thika Road',
            'destination': 'Mount Kenya University',
            'arrivalTime': '18:02',
            'tripCost': 500
        },
        {
            'id': 2,
            'userId': 1,
            'startLocation': 'Ngara',
            'endLocation': 'Thika Road',
            'destination': 'Traledia Apartments',
            'arrivalTime': '18:02',
            'tripCost': 500
        },
        {
            'id': 3,
            'userId': 1,
            'startLocation': 'Parklands',
            'endLocation': 'Thika Road',
            'destination': 'Nehema Primary School, Parkroad',
        }
        
    ]
  return (
    <View style={{backgroundColor: '#080d0a'}}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image source={histIllustration} />
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center', paddingVertical: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Ride History</Text>
            <Text style={{fontWeight: 'bold'}}>A reciept for all trips made in the last 60 days</Text>
            <Text>Earn 5 points for every invite you make</Text>
        </View>
      </View>
      <View style={styles.hist}>
        <View style={styles.histView}>
            <AntDesign name="star" size={24} color="white" />
            <View style={{marginTop: 10, marginLeft: 10}}>
                <View>
                    <Text>Thika</Text>
                    <Text>Thika Road</Text>
                    <Text>Mount Kenya University</Text>
                </View>
                <View style={styles.histStats}>
                    <View style={{marginRight: 100}}>
                        <Text>Arival Time: 18:02</Text>
                    </View>
                    <View>
                        <Text style={{color:'#0aff7e'}}>Trip Cost: Ksh 500</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.histView}>
            <AntDesign name="star" size={24} color="yellow" />
            <View style={{marginTop: 10, marginLeft: 10}}>
                <View>
                    <Text>Thika</Text>
                    <Text>Thika Road</Text>
                    <Text>Mount Kenya University</Text>
                </View>
                <View style={styles.histStats}>
                    <View style={{marginRight: 100}}>
                        <Text>Arival Time: 18:02</Text>
                    </View>
                    <View>
                        <Text style={{color:'#0aff7e'}}>Trip Cost: Ksh 500</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.histView}>
            <AntDesign name="star" size={24} color="white" />
            <View style={{marginTop: 10, marginLeft: 10}}>
                <View>
                    <Text>Ngara</Text>
                    <Text>Thika Road</Text>
                    <Text>Trelenium Apartments</Text>
                </View>
                <View style={styles.histStats}>
                    <View style={{marginRight: 100}}>
                        <Text>Arival Time: 18:02</Text>
                    </View>
                    <View>
                        <Text style={{color:'#0aff7e'}}>Trip Cost: Ksh 500</Text>
                    </View>
                </View>
            </View>
        </View>
      </View>
      <View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    hist: {
        backgroundColor: '#009245',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderTopStartRadius: 16
    },
    histView: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        paddingBottom: 15,
        marginTop: 8
    },
    histStats: {
        flexDirection: 'row',
        paddingTop: 15,
        justifyContent: 'space-between',
    }
})