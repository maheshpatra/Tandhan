import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity, ScrollView, StatusBar,
  ImageBackground
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Colors } from '../../Constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { Calibri } from "../../Constants/Fonts";
import {Picker} from '@react-native-picker/picker';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [language, setLanguage] = useState(null);


  if (!language) {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#262727'} barStyle={'light-content'} />

        <ImageBackground resizeMode="stretch" source={require('../../assets/images/gbg.png')} style={{ width: '94%', alignSelf: 'flex-end', height: responsiveHeight(43), justifyContent: 'center', alignItems: 'center', }} >
          <Image source={require('../../assets/images/logo.png')} style={{ width: responsiveWidth(30), height: responsiveWidth(30), marginTop: responsiveWidth(8), marginRight: responsiveWidth(5) }} />
        </ImageBackground>

        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: -responsiveWidth(22) }}>

          <View style={{ width: "100%", paddingTop: responsiveWidth(26) }}>

            <View style={{ backgroundColor: '#fff', width: '100%', backgroundColor: '#fff', height: responsiveHeight(55), borderTopRightRadius: 45, borderTopLeftRadius: 45 }}>
              <Text style={{ color: "#555", marginVertical: responsiveHeight(5), alignSelf: "center", fontFamily: Calibri.bold, marginBottom: 10, fontSize: responsiveFontSize(3) }}>
                Select Language

              </Text>
              <View style={{width:'70%',borderRadius:16,backgroundColor:'#E2E2E2',alignSelf:'center',}}>
              <Picker
                style={{padding:5}}
                placeholder="asdas"
                selectedValue={language?language:''}
                onValueChange={(itemValue, itemIndex) =>
                  setLanguage(itemValue)
                }>
                <Picker.Item label="English" value="english" />
                <Picker.Item label="Bengali" value="Bengali" />
                <Picker.Item label="Hindi" value="Hindi" />
                <Picker.Item label="Marathi" value="Marathi" />
              </Picker>
              </View>



              <Text style={{ color: "#ccc", marginTop: 20, alignSelf: "center", fontFamily: Calibri.regular, marginBottom: 10, fontSize: responsiveFontSize(3),width:'80%',textAlign:'center',position:'absolute',bottom:10 }}>
               Select your preferred language from the drop down menu
               
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#262727'} barStyle={'light-content'} />

      <ImageBackground resizeMode="stretch" source={require('../../assets/images/gbg.png')} style={{ width: '94%', alignSelf: 'flex-end', height: responsiveHeight(43), justifyContent: 'center', alignItems: 'center', }} >
        <Image source={require('../../assets/images/logo.png')} style={{ width: responsiveWidth(30), height: responsiveWidth(30), marginTop: responsiveWidth(8), marginRight: responsiveWidth(5) }} />
      </ImageBackground>

      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: -responsiveWidth(22) }}>

        <View style={{ width: "100%", paddingTop: responsiveWidth(26) }}>

          <View style={{ backgroundColor: '#fff', width: '100%', backgroundColor: '#fff', height: responsiveHeight(55), borderTopRightRadius: 45, borderTopLeftRadius: 45 }}>
            <Text style={{ color: "#555", marginVertical: responsiveHeight(5), alignSelf: "center", fontFamily: Calibri.bold, marginBottom: 10, fontSize: responsiveFontSize(3) }}>
              Welcome

            </Text>
            <View style={{ marginTop: responsiveWidth(8) }}>
              <View style={styles.inputContainer}>
                {/* <Feather style={{ marginLeft: responsiveWidth(2.5) }} name="mail" color={Colors.primary} size={responsiveWidth(6)} /> */}
                <TextInput
                  value={email}
                  cursorColor={Colors.primary}
                  onChangeText={(txt) => setEmail(txt)}
                  selectionColor={'#ccc'}
                  placeholder="Username"
                  placeholderTextColor={Colors.grey}

                  style={styles.inputfild}
                />
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <View style={styles.inputContainer}>
                {/* <Feather style={{ marginLeft: 10 }} name="lock" color={Colors.primary} size={responsiveWidth(6)} /> */}
                <TextInput
                  value={pass}
                  cursorColor={Colors.primary}
                  placeholderTextColor={Colors.grey}
                  onChangeText={(pas) => setPass(pas)}
                  placeholder="Password"
                  secureTextEntry
                  style={styles.inputfild}
                />
              </View>

            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Main')
              }}>
              <Text style={{ fontSize: responsiveFontSize(3), color: "#fff", fontFamily: Calibri.bold }}>
                Log In
              </Text>
            </TouchableOpacity>

            <Text style={{ color: "#ccc", marginTop: 20, alignSelf: "center", fontFamily: Calibri.bold, marginBottom: 10, fontSize: responsiveFontSize(2.3) }}>
              New User ?
              <Text
                onPress={() => navigation.navigate('Signup')}
                style={{ color: Colors.backgroundColor, marginTop: 10, fontWeight: 'bold' }}
              >
                {" "}
                Sign up
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Login;