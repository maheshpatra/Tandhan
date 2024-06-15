import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity, ScrollView, StatusBar
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Colors } from '../../Constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
import { Calibri } from "../../Constants/Fonts";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  



  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#262727'} barStyle={'light-content'} />
      <TouchableOpacity style={{height:responsiveWidth(12),width:responsiveWidth(12),backgroundColor:'#fff',position:'absolute',top:10,right:25,justifyContent:'center',alignItems:'center',borderRadius:responsiveWidth(10)}}>
      <Image resizeMode="stretch" source={require('../../assets/images/headphone.png')} style={{width:responsiveWidth(8),height:responsiveWidth(6),}} />
        
      </TouchableOpacity>
       
      <ScrollView showsVerticalScrollIndicator={false} style={{ }}>
       
        <View style={{ width: "100%", marginTop: responsiveHeight(4) }}>
        <Image source={require('../../assets/images/gbg.png')} style={{width:'98%',marginLeft:20}} />
        <View style={{backgroundColor:'#fff',marginTop:-responsiveHeight(25),width:'100%',backgroundColor:'#fff',borderTopRightRadius:45,borderTopLeftRadius:45,paddingBottom:12}}>
        <Image source={require('../../assets/images/logo.png')} style={{width:responsiveWidth(30),height:responsiveWidth(30),marginTop:-responsiveWidth(15),alignSelf:'center'}} />
          <View>
          <Text style={{ color: "#555", marginTop: responsiveHeight(2), alignSelf: "center",fontFamily:Calibri.bold,marginBottom:10,fontSize:responsiveFontSize(3) }}>
           Sign Up
            
          </Text>
            <View style={styles.inputContainer}>
              {/* <Feather style={{ marginLeft: responsiveWidth(2.5) }} name="mail" color={Colors.primary} size={responsiveWidth(6)} /> */}
                <TextInput
                value={email}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setEmail(txt)}
                selectionColor={'#ccc'}
                placeholder="Adahar No."
                placeholderTextColor={Colors.grey}
                style={styles.inputfild}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
                //generate otp
                }}>
            <Text style={{ fontWeight: "bold", fontSize: responsiveFontSize(2.2), color: "#fff",fontFamily:Calibri.bold }}>
              Generate OTP
            </Text>
          </TouchableOpacity>
            <View style={{ marginTop: 10 }}>
          <View style={styles.inputContainer}>
              {/* <Feather style={{ marginLeft: responsiveWidth(2.5) }} name="mail" color={Colors.primary} size={responsiveWidth(6)} /> */}
                <TextInput
                value={email}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setEmail(txt)}
                selectionColor={'#ccc'}
                placeholder="Enter OTP"
                placeholderTextColor={Colors.grey}
                style={styles.inputfild}
              />
            </View>
            </View>
          <View style={{ marginTop: 10 }}>
            <View style={styles.inputContainer}>
              {/* <Feather style={{ marginLeft: 10 }} name="lock" color={Colors.primary} size={responsiveWidth(6)} /> */}
              <TextInput
                value={pass}
                cursorColor={Colors.primary}
                placeholderTextColor={Colors.grey}
                onChangeText={(pas) => setPass(pas)}
                placeholder="Whatsapp No."
                secureTextEntry
                style={styles.inputfild}
              />
            </View>
            
          </View>
         
         
          <TouchableOpacity
            style={[styles.button,{width:'80%'}]}
            onPress={() => {
              navigation.navigate('Main')
                }}>
            <Text style={{ fontWeight: "bold", fontSize: responsiveFontSize(3), color: "#fff",fontFamily:Calibri.bold }}>
              Submit
            </Text>
          </TouchableOpacity>
          
            <Text
              onPress={() => navigation.navigate('SignupManually')}
              style={{ color: '#999', marginTop: 10, fontWeight: 'bold',alignSelf:'center',fontSize:responsiveFontSize(2.3) }}
            >
              {" "}
              or sign up manually
            </Text>
          
          <Text style={{ color: "#ccc", marginTop: 20, alignSelf: "center",fontFamily:Calibri.bold,marginBottom:10,fontSize:responsiveFontSize(2.3) }}>
            Already a user ? 
            <Text
              onPress={() => navigation.navigate('Login')}
              style={{ color: Colors.backgroundColor, marginTop: 10, fontWeight: 'bold' }}
            >
              {" "}
              Login
            </Text>
          </Text>
          </View>
        </View>
      </ScrollView>
    </View>
)}

export default Signup;