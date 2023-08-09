import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useState} from 'react'

import { Ionicons } from '@expo/vector-icons';
// import { TextInput } from 'react-native-web';


export default function Login() {
    const [formData, setFormData] = useState({})
  return (
    <View style={styles.container}>
        <View>
            <View style={{alignItems:'center'}}>
                <View style={{ borderWidth: 1, borderColor: 'white', backgroundColor: 'white', borderRadius: 50, alignItems:'center', justifyContent:'center'}}>
                    <Ionicons name="person" size={100} color="black" />
                </View>
                <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>Login</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.formLabelText}>Enter Email</Text>
                <TextInput
                    placeholder="Email" 
                    style={styles.textInput}
                    name="email"
                    onChangeText={(text) => setFormData({...formData, email: text})}
                    />
                <Text style={styles.formLabelText}>Enter Password</Text>
                <TextInput 
                    placeholder="Password"
                    name="password"
                    onChangeText={(text) => setFormData({...formData, password: text})}
                    style={styles.textInput}
                    />
                <View style={{ flexDirection:'row',justifyContent: 'flex-end', borderWidth: 1, marginVertical: 10}}>
                    <Text style={{color:'white'}}>Forgot password?</Text>
                </View>
                {/* <Button onPress={() => console.log(formData)}>Login</Button> */}
                <View style={{width:"70%", marginLeft: 60, justifyContent: 'center'}}>
                    <Button 
                        onPress={() => console.log(formData)}
                        title="Login"
                        color="rgb(0 146 69)"
                        accessibilityLabel="Login"
                        style={{ }}
                        />
                </View>
            </View>
            <View style={{justifyContent: 'center', flexDirection:'row', marginVertical:20}}>
                <Text style={{color:'white'}}>or</Text>
            </View>
            <View>
                <View style={styles.alt}>
                    <Ionicons name="logo-google" size={24} color="white" />
                    <Text style={{color:'white', paddingLeft: 15}}>Login with Google</Text>
                </View>
                <View style={styles.alt}>
                    <Ionicons name="logo-facebook" size={24} color="white" />
                    <Text style={{color:'white', paddingLeft: 15}}>Login with Facebook</Text>
                </View>
            </View>
            <View>
                <Text>Don't have an account?</Text>
                <Text>Create Account</Text>  
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 100,
        // backgroundColor: '#082616',
        alpha: 0.5,
        backgroundColor:  'rgb(8,36,21)',
        // alignItems: 'center',
        // alignItems: 'center',
    },
    form: {
        // borderWidth: 1,
        marginHorizontal: 5,
        paddingVertical: 10,
        // paddingVertical: 10, 
        paddingHorizontal: 10,
        // height: 250  
    },
    formLabelText :{
        fontSize: 20,
        color: 'white',
    },
    textInput: { 
        backgroundColor:'white', 
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 7,
        paddingHorizontal: 10,
    },
    alt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 7,
        borderColor: 'white',
    }
})