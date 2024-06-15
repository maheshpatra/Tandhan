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

const SignupManually = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [signup, setsignup] = useState(false);
  

if(signup){
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#262727'} barStyle={'light-content'} />
      <TouchableOpacity style={{height:responsiveWidth(12),width:responsiveWidth(12),backgroundColor:'#fff',position:'absolute',top:10,right:25,justifyContent:'center',alignItems:'center',borderRadius:responsiveWidth(10)}}>
      <Image resizeMode="stretch" source={require('../../assets/images/headphone.png')} style={{width:responsiveWidth(8),height:responsiveWidth(6),}} />
        
      </TouchableOpacity>
       
      <ScrollView showsVerticalScrollIndicator={false} style={{ }}>
       
        <View style={{ width: "100%", marginTop: responsiveHeight(4) }}>
        <Image source={require('../../assets/images/gbg.png')} style={{width:'98%',marginLeft:20}} />
        <View style={{backgroundColor:'#fff',marginTop:-responsiveHeight(25),width:'100%',backgroundColor:'#fff',borderTopRightRadius:45,borderTopLeftRadius:45,paddingBottom:12,height:responsiveHeight(72)}}>
        <Image source={require('../../assets/images/logo.png')} style={{width:responsiveWidth(30),height:responsiveWidth(30),marginTop:-responsiveWidth(15),alignSelf:'center'}} />
        <Image source={require('../../assets/images/checkbox.png')} style={{width:responsiveWidth(20),height:responsiveWidth(20),marginTop:responsiveWidth(15),alignSelf:'center'}} />
          
          
         
         
          
          
           
          
          <Text style={{ color:  '#848484', marginTop: 20, alignSelf: "center",fontFamily:Calibri.bold,marginBottom:5,fontSize:responsiveFontSize(5) }}>
            Sign up Completed 
            
            
          </Text>
          <Text style={{ color: '#848484',  alignSelf: "center",fontFamily:Calibri.bold,marginBottom:10,fontSize:responsiveFontSize(3) }}>
            we will contact with in 48hrs  </Text>
            <Text onPress={()=>navigation.navigate('Login')} style={{ color: '#848484',  alignSelf: "center",fontFamily:Calibri.bold,marginBottom:10,fontSize:responsiveFontSize(3),position:'absolute',bottom:10 }}>
            Back to Log In Page </Text>
          </View>
          
        </View>
      </ScrollView>
    </View>
)
}

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
                placeholder="Name"
                placeholderTextColor={Colors.grey}
                style={styles.inputfild}
              />
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
          <View style={styles.inputContainer}>
              {/* <Feather style={{ marginLeft: responsiveWidth(2.5) }} name="mail" color={Colors.primary} size={responsiveWidth(6)} /> */}
                <TextInput
                value={email}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setEmail(txt)}
                selectionColor={'#ccc'}
                placeholder="Contact No."
                placeholderTextColor={Colors.grey}
                style={styles.inputfild}
              />
            </View>
            </View>
            <View style={{ marginTop: 10 }}>
          <View style={styles.inputContainer}>
              {/* <Feather style={{ marginLeft: responsiveWidth(2.5) }} name="mail" color={Colors.primary} size={responsiveWidth(6)} /> */}
                <TextInput
                value={email}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setEmail(txt)}
                selectionColor={'#ccc'}
                placeholder="Whatsapp No."
                placeholderTextColor={Colors.grey}
                style={styles.inputfild}
              />
            </View>
            </View>
            <View style={{ marginTop: 10 }}>
          <View style={styles.inputContainer}>
              {/* <Feather style={{ marginLeft: responsiveWidth(2.5) }} name="mail" color={Colors.primary} size={responsiveWidth(6)} /> */}
                <TextInput
                value={email}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setEmail(txt)}
                selectionColor={'#ccc'}
                placeholder="Email"
                placeholderTextColor={Colors.grey}
                style={styles.inputfild}
              />
            </View>
            </View>
            <View style={{ marginTop: 10 }}>
          <View style={styles.inputContainer}>
              {/* <Feather style={{ marginLeft: responsiveWidth(2.5) }} name="mail" color={Colors.primary} size={responsiveWidth(6)} /> */}
                <TextInput
                value={email}
                cursorColor={Colors.primary}
                onChangeText={(txt) => setEmail(txt)}
                selectionColor={'#ccc'}
                placeholder="Addhar No"
                placeholderTextColor={Colors.grey}
                style={styles.inputfild}
              />
            </View>
            </View>
         
         
         
          <TouchableOpacity
            style={[styles.button,{width:'80%'}]}
            onPress={() => {
              setsignup(true)
                }}>
            <Text style={{ fontWeight: "bold", fontSize: responsiveFontSize(3), color: "#fff",fontFamily:Calibri.bold }}>
              Submit
            </Text>
          </TouchableOpacity>
          
           
          
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

export default SignupManually;