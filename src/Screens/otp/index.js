import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity, ScrollView
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import {Colors} from "../../Constants/Colors";
import Feather from 'react-native-vector-icons/Feather';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import OTPTextInput from 'react-native-otp-textinput'
import { Calibri } from "../../Constants/Fonts";

const Otp = ({navigation}) => {
  const [email, setEmail] = useState('');
 
  return (
    <View
      style={{
        flex: 1, backgroundColor: "#fff",
      }}>
     
      
      <ScrollView style={{ marginHorizontal: 15 }}>
        
        <View style={{ width: "100%", marginTop: 15 }}>
          <View >
            <View style={styles.inputContainer}>
              {/* <Feather style={{ marginLeft: responsiveWidth(2.5) }} name="mail" color={Colors.primary} size={responsiveWidth(6)} /> */}
           <OTPTextInput 
           inputCount={6}
           textInputStyle={{borderWidth:1,borderBottomWidth:1,borderRadius:4}}
          //  style={{fontFamily:Calibri.bold,fontSize:50}}
           />
            </View>
          </View>
          <View style={{ marginTop: 15 }}></View>
          <TouchableOpacity
            style={styles.submitbtn}
            onPress={() => {
              navigation.navigate('UpdatePass')
            }}>
            <Text style={styles.submittxt}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

)}

export default Otp