import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function SignIn() {
    const [formData, setFormData] = useState({})
    return (
      <View style={styles.container}>
          <View>
              <View style={{alignItems:'center'}}>
                  <View style={{ borderWidth: 1, borderColor: 'white', backgroundColor: 'white', borderRadius: 50, alignItems:'center', justifyContent:'center'}}>
                      <Ionicons name="person" size={100} color="black" />
                  </View>
                  <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>SignIn</Text>
              </View>
              <View style={styles.form}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={styles.formLabelText}>First Name</Text>
                            <TextInput
                                placeholder="Fname" 
                                style={styles.textInput}
                                name="Fname"
                                onChangeText={(text) => setFormData({...formData, email: text})}
                                />
                        </View>
                        <View>
                            <Text style={styles.formLabelText}>Last Name</Text>
                            <TextInput 
                                placeholder="Last Name"
                                name="Lname"
                                onChangeText={(text) => setFormData({...formData, password: text})}
                                style={styles.textInput}
                                />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.formLabelText}>Enter Email</Text>
                        <TextInput
                            placeholder="Email" 
                            style={styles.textInput2}
                            name="email"
                            onChangeText={(text) => setFormData({...formData, email: text})}
                            />
                    </View>
                    <View>
                        <Text style={styles.formLabelText}>Password</Text>
                        <TextInput 
                            placeholder="Password"
                            name="password"
                            onChangeText={(text) => setFormData({...formData, password: text})}
                            style={styles.textInput2}
                            />
                    </View>
                    <View>
                        <Text style={styles.formLabelText}>Confirm Password</Text>
                        <TextInput 
                            placeholder="Confirm Password"
                            name="password"
                            onChangeText={(text) => setFormData({...formData, password: text})}
                            style={styles.textInput2}
                            />
                    </View>
                   <View style={{marginVertical: 10}}>
                    <Button 
                        onPress={() => console.log(formData)}
                        title="Login"
                        color="rgb(0 146 69)"
                        accessibilityLabel="Login"
                        
                        />
                   </View>
                    
              </View>
              <View style={{justifyContent: 'center', flexDirection:'row'}}>
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
              <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
                  <Text style={{color: 'white'}}>Don't have an account?</Text>
                  <Text style={{color: '#009245', marginLeft:10}}>Create Account</Text>  
              </View>
          </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
      container:{
          flex: 1,
          paddingTop: 70,
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
        //   height: 250  
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
          width: 170
      },
        textInput2: { 
            backgroundColor:'white', 
            borderWidth: 1,
            marginVertical: 10,
            borderRadius: 7,
            paddingHorizontal: 10,
            width: 350
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