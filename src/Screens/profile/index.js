
import React, { useEffect, useState } from 'react';
import {
  Text, View, TextInput, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, SafeAreaView, Linking, FlatList, Alert, Platform, ActivityIndicator
} from "react-native";
import Styles from './style';
import { Colors } from '../../Constants/Colors'
import { Calibri } from '../../Constants/Fonts';
import { Images } from '../../Constants/ImageIconContant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Icon } from 'react-native-basic-elements';
import Swiper from "react-native-swiper";
import { ImageSlider } from "react-native-image-slider-banner";
// create a component
const Profile = ({ props, route, navigation }) => {

  const styles = Styles();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ height: 59, width: '94%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', paddingBottom: 6 }}>

        <Image resizeMode='cover' source={require('../../assets/images/noti.png')} style={{ width: responsiveWidth(6), height: responsiveWidth(7), position: 'absolute', right: 15 }} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>


        <TouchableOpacity onPress={()=>navigation.navigate('ProfileDetails')} style={{ height: 120, width: '91%', alignSelf: 'center', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Image resizeMode='stretch' source={require('../../assets/images/picpeople.png')} style={{ width: responsiveWidth(25), height: responsiveWidth(21), }} />
          <View style={{ borderTopWidth: .5, borderBottomWidth: .5, height: '70%', width: '70%', alignSelf: 'center', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 10 }} >
            <View >
              <Text style={{ fontFamily: Calibri.bold, fontSize: 20, color: '#000' }}>Hi There!</Text>
              <Text style={{ fontFamily: Calibri.bold, fontSize: 20, color: '#000' }}>Ankit Agarwal</Text>
              <Text style={{ textAlign: 'center', width: 60, margin: 3, borderRadius: 5, fontFamily: Calibri.bold, fontSize: 12 }}>Edit Profile</Text>
            </View>
            <Image resizeMode='stretch' source={require('../../assets/images/profile_bk.png')} style={{ width: responsiveWidth(12), height: responsiveWidth(12), }} />
          </View>
        </TouchableOpacity>
        <View style={{ height: 50, width: '94%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderRadius: 20, backgroundColor: '#e2e2e2', marginTop: 10, }}>
          <TextInput
            style={{ height: '100%', width: '90%', paddingLeft: 16 }}
            placeholder='Search'
            placeholderTextColor={Colors.backgroundColor}
          />
          <Image resizeMode='cover' source={require('../../assets/images/search.png')} style={{ width: responsiveWidth(5), height: responsiveWidth(5), }} />
        </View>

        <View style={{ height: responsiveWidth(18), width: '94%', alignSelf: 'center', marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Dashboard', {screen: 'OrderSummary'});
          }} style={{ flexDirection: 'row', alignItems: 'center', width: '47%', alignSelf: 'center', height: '100%', backgroundColor: Colors.backgroundColor, justifyContent: 'center', borderRadius: 12 }}>
            <Image source={require('../../assets/images/shopping.png')} style={{ height: responsiveWidth(7), width: responsiveWidth(7) }} />
            <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#fff', marginLeft: 10 }}>Orders</Text>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => 
             navigation.navigate('Rewards')
          } style={{ flexDirection: 'row', alignItems: 'center', width: '47%', alignSelf: 'center', height: '100%', backgroundColor: Colors.backgroundColor, justifyContent: 'center', borderRadius: 12 }}>
            <Image source={require('../../assets/images/wallet.png')} style={{ tintColor: '#fff', height: responsiveWidth(7), width: responsiveWidth(6) }} />
            <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2), color: '#fff', marginLeft: 10 }}>Offer & Schemes</Text>

          </TouchableOpacity>
        </View>
        <View style={{ height: responsiveWidth(18), width: '94%', alignSelf: 'center', marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Rewards')} style={{ flexDirection: 'row', alignItems: 'center', width: '47%', alignSelf: 'center', height: '100%', backgroundColor: Colors.backgroundColor, justifyContent: 'center', borderRadius: 12 }}>
            <Image source={require('../../assets/images/gift-box-benefits_15859114.png')} style={{ tintColor: '#fff', height: responsiveWidth(7), width: responsiveWidth(7) }} />
            <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#fff', marginLeft: 10 }}>Rewards</Text>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={{ flexDirection: 'row', alignItems: 'center', width: '47%', alignSelf: 'center', height: '100%', backgroundColor: Colors.backgroundColor, justifyContent: 'center', borderRadius: 12 }}>
            <Image source={require('../../assets/images/ticket_221984.png')} style={{ tintColor: '#fff', height: responsiveWidth(5), width: responsiveWidth(8) }} />
            <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#fff', marginLeft: 10 }}>Raise a Ticket</Text>

          </TouchableOpacity>
        </View>
        <View style={{ height: responsiveWidth(18), width: '94%', alignSelf: 'center', marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
          <TouchableOpacity onPress={() => 
            navigation.navigate('Dashboard', {screen: 'Tmwallet'})
          } style={{ flexDirection: 'row', alignItems: 'center', width: '47%', alignSelf: 'center', height: '100%', backgroundColor: Colors.backgroundColor, justifyContent: 'center', borderRadius: 12 }}>
            <Image source={require('../../assets/images/tmw.png')} style={{ height: responsiveWidth(7), width: responsiveWidth(10), tintColor: '#fff' }} />
            <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#fff', marginLeft: 10 }}>TM Wallet</Text>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('Payment')}} style={{ flexDirection: 'row', alignItems: 'center', width: '47%', alignSelf: 'center', height: '100%', backgroundColor: Colors.backgroundColor, justifyContent: 'center', borderRadius: 12 }}>
            <Image source={require('../../assets/images/13-route.png')} style={{ height: responsiveWidth(7), width: responsiveWidth(7), tintColor: '#fff' }} />
            <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#fff', marginLeft: 10 }}>Track Payment</Text>

          </TouchableOpacity>
        </View>

        {/* Account Settings Part */}
        <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(3.5), color: '#000', marginLeft: 20, marginTop: 21 }}>Account settings</Text>

        <TouchableOpacity onPress={() => navigation.navigate('AddCustomer')} style={{ flexDirection: 'row', alignItems: 'center', width: '91%', alignSelf: 'center', marginTop: 15, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 5, borderTopWidth: 1 }}>
          <Image source={Images.myorder} style={{ height: 40, width: 40 }} />
          <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#000', marginLeft: 10 }}>Edit/Add Customers</Text>
          <AntDesign name='right' color={'#999'} size={responsiveFontSize(2.5)} style={{ position: 'absolute', right: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{}} style={{ flexDirection: 'row', alignItems: 'center', width: '91%', alignSelf: 'center', marginTop: 5, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 5 }}>
          <Image source={Images.myorder} style={{ height: 40, width: 40 }} />
          <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#000', marginLeft: 10 }}>Notifications Settings</Text>
          <AntDesign name='right' color={'#999'} size={responsiveFontSize(2.5)} style={{ position: 'absolute', right: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ flexDirection: 'row', alignItems: 'center', width: '91%', alignSelf: 'center', marginTop: 5, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 5 }}>
          <Image source={Images.aboutus} style={{ height: 40, width: 40 }} />
          <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#000', marginLeft: 10 }}>Select Language</Text>
          <AntDesign name='right' color={'#999'} size={responsiveFontSize(2.5)} style={{ position: 'absolute', right: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ flexDirection: 'row', alignItems: 'center', width: '91%', alignSelf: 'center', marginTop: 5, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 5 }}>
          <Image source={Images.privacypolicy} style={{ height: 40, width: 40 }} />
          <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#000', marginLeft: 10 }}>Account Statement</Text>
          <AntDesign name='right' color={'#999'} size={responsiveFontSize(2.5)} style={{ position: 'absolute', right: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ flexDirection: 'row', alignItems: 'center', width: '91%', alignSelf: 'center', marginTop: 5, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 5 }}>
          <Image source={Images.tearmscondition} style={{ height: 40, width: 40 }} />
          <Text style={{ fontFamily: Calibri.bold, fontSize: 18, color: '#000', marginLeft: 10 }}>Documents</Text>
          <AntDesign name='right' color={'#999'} size={responsiveFontSize(2.5)} style={{ position: 'absolute', right: 10 }} />
        </TouchableOpacity>
        <View style={{ height: responsiveWidth(25), width: '94%', alignSelf: 'center', marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20,marginBottom:20 }}>
          <TouchableOpacity onPress={() => {}} style={{ flexDirection: 'row', alignItems: 'center', width: '47%', alignSelf: 'center', height: '100%', backgroundColor: '#fff', justifyContent: 'center', borderRadius: 12,elevation:10 }}>
            <View style={{height:responsiveWidth(14),width:responsiveWidth(14),borderRadius:responsiveWidth(25),backgroundColor:'#FCA802',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontFamily:Calibri.bold,fontSize:responsiveFontSize(3),color:'#fff'}}>B</Text>
            </View>
            <AntDesign name='eyeo' color={'#ccc'} size={responsiveFontSize(3)} style={{position:'absolute',right:10,top:10}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{ flexDirection: 'row', alignItems: 'center', width: '47%', alignSelf: 'center', height: '100%', backgroundColor: '#fff', justifyContent: 'center', borderRadius: 12 ,elevation:10 }}>
          <View style={{height:responsiveWidth(14),width:responsiveWidth(14),borderRadius:responsiveWidth(25),backgroundColor:'#7B7B7B',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontFamily:Calibri.bold,fontSize:responsiveFontSize(3),color:'#fff'}}>C</Text>
            </View>
            <AntDesign name='eyeo' color={'#ccc'} size={responsiveFontSize(3)} style={{position:'absolute',right:10,top:10}}/>
          </TouchableOpacity>
        </View>
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


export default Profile;
