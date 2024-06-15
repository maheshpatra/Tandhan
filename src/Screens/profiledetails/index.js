
import React, { useEffect, useState } from 'react';
import {
  Text, View, TextInput, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, SafeAreaView, Linking, FlatList, Alert, Platform, ActivityIndicator
} from "react-native";
import Styles from './style';
import { Colors } from '../../Constants/Colors'
import { Calibri } from '../../Constants/Fonts';
import { Images } from '../../Constants/ImageIconContant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Icon } from 'react-native-basic-elements';
import Swiper from "react-native-swiper";
import { ImageSlider } from "react-native-image-slider-banner";
// create a component
const ProfileDetails = ({ props, route, navigation }) => {

  const styles = Styles();

  const data= ['Edit Profile Image','Edit Name','Edit Number','Edit Address','Edit Documents','Edit Email','Enter UPI ID','Upload Payment QR']

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      <ScrollView showsVerticalScrollIndicator={false}>


        <View style={{ height: responsiveHeight(30), width: '91%', alignSelf: 'center', borderRadius: 10, justifyContent: 'center' }}>
          <Image resizeMode='stretch' source={require('../../assets/images/picpeople.png')} style={{ width: responsiveWidth(25), height: responsiveWidth(21), alignSelf: 'center' }} />
          <Image resizeMode='stretch' source={require('../../assets/images/profile_bk.png')} style={{ width: responsiveWidth(10), height: responsiveWidth(10), position: 'absolute', alignSelf: 'center', top: 0, right: '33%' }} />
          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.5), color: '#000', alignSelf: 'center', marginTop: 10 }}>Ankit Agarwal</Text>
          <Text style={{ fontFamily: Calibri.regular, fontSize: responsiveFontSize(2), color: '#555', alignSelf: 'center', marginTop: 2 }}>34534334</Text>
          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2), color: '#555', alignSelf: 'center', marginTop: 2 }}>122 hyprer street ,Lilua ,howrah - 07</Text>
          <View View style={{justifyContent:'space-between', width: '70%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderRadius: 20,marginTop:5 }}>
            <Text style={{fontStyle:'italic', fontFamily: Calibri.regular, fontSize: responsiveFontSize(2), color: '#555'}}>
              <AntDesign name='pluscircleo' size={responsiveFontSize(2)} color={Colors.backgroundColor} /> Add Profile
            </Text>
            <Text style={{fontStyle:'italic', fontFamily: Calibri.regular, fontSize: responsiveFontSize(2), color: '#555' }}>
              <Octicons name='arrow-switch' size={responsiveFontSize(2)} color={Colors.backgroundColor} /> Switch Account
            </Text>
          </View>
        </View>
        

      

        {/* Account Settings Part */}
        <View style={{width:'90%',borderTopWidth:1,borderColor:'#ccc',alignSelf:'center'}} />
        {
          data.map((item)=>
            <TouchableOpacity onPress={() => {
              
            }} style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', marginTop: 5, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 5 }}>
          <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#555',  }}>{item}</Text>
          <AntDesign name='right' color={'#555'} size={responsiveFontSize(2.5)} style={{ position: 'absolute', right: 0 }} />
        </TouchableOpacity>
          )
        }
        
       
        
      </ScrollView>
    </View>
    // <SkeletonPlaceholder >
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={100} alignSelf='center' borderRadius={10} marginTop={30} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={50} alignSelf='center' marginTop={15} borderRadius={10} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={50} alignSelf='center' marginTop={15} borderRadius={10} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={50} alignSelf='center' marginTop={15} borderRadius={10} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={50} alignSelf='center' marginTop={15} borderRadius={10} />


    // </SkeletonPlaceholder>


  );
};


export default ProfileDetails;
