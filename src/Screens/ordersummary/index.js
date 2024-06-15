
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
const OrderSummary = ({ props, route, navigation }) => {

  const styles = Styles();
  const orders = [
    {
      name: 'Balaji Ltd',
      image: require('../../assets/images/ecopaulin-star-big-image.png'),
      status: 'Delivered',
      orderId: '#ORD92836',
      que: 2
    },
    {
      name: 'Maithhan Steel',
      image: require('../../assets/images/shadenet.65d7cbf3.png'),
      status: 'Out for Delivery',
      orderId: '#ORD9245',
      que: 5
    },
    {
      name: 'Tvc Ltd',
      image: require('../../assets/images/ecorun-img3.png'),
      status: 'Delivered',
      orderId: '#ORD92905',
      que: 8
    },
    {
      name: 'Finolex Pvt Ltd',
      image: require('../../assets/images/peo.png'),
      status: 'Packed',
      orderId: '#ORD98836',
      que: 3

    }
  ]

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ height: 50, width: '94%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', }}>

        <Image resizeMode='cover' source={require('../../assets/images/noti.png')} style={{ width: responsiveWidth(6), height: responsiveWidth(7), position: 'absolute', right: 15 }} />
      </View>
      <View style={{ height: 50, width: '92%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', paddingBottom: 6 }}>

        <Image resizeMode='cover' source={require('../../assets/images/shoppingactive.png')} style={{ width: responsiveWidth(11), height: responsiveWidth(12), tintColor: Colors.backgroundColor }} />
        <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(4), color: Colors.backgroundColor, marginLeft: 15 }}>Order Summary</Text>
      </View>
      <FlatList
        data={orders}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={()=>navigation.navigate('OrderDetails')} style={{ width: '93%', height: responsiveWidth(29), backgroundColor: '#E2E2E2', borderRadius: 16, alignSelf: 'center', marginTop: 25, flexDirection: 'row', alignItems: 'center' }}>
            <Image resizeMode='cover' source={item.image} style={{ width: responsiveWidth(35), height: responsiveWidth(33), marginLeft: -10 }} />
            <View style={{marginLeft:10}}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4), color: Colors.backgroundColor }}>{item.name}</Text>
              <Text style={{ fontFamily: Calibri.regular, fontSize: responsiveFontSize(1.8), color: Colors.backgroundColor }}>{item.orderId}</Text>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2), color: item.status == 'Delivered' ? 'green' : 'orange',marginBottom:5 }}>{item.status}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center',width:'83%',marginBottom:0  }}>
                <TouchableOpacity onPress={() => navigation.navigate('Brand')} style={{ borderRadius: 15, backgroundColor: '#fff', width: '50%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', }}>
                  <Text style={{ fontFamily: Calibri.regular, color: 'black', color: Colors.backgroundColor, fontSize: responsiveFontSize(1.6),paddingVertical:2 }}>Download Invoice</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Brand')} style={{marginLeft:10, borderRadius: 15, backgroundColor: '#fff', width: '38%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center',  }}>
                <Text style={{ fontFamily: Calibri.regular, color: 'black', color: Colors.backgroundColor, fontSize: responsiveFontSize(1.6), paddingVertical:2}}>Order Again</Text>

                </TouchableOpacity>
              </View>
              <View style={{backgroundColor:Colors.backgroundColor,height:30,width:30,borderRadius:8,position:'absolute',top:0,right:'42%',justifyContent:'center',alignItems:'center'}}>
              <Text style={{ fontFamily: Calibri.bold, color: '#fff',  fontSize: responsiveFontSize(2), }}>{item.que}</Text>

                </View>
                <View style={{backgroundColor:Colors.backgroundColor,height:30,width:48,borderRadius:8,position:'absolute',top:0,right:'22%',justifyContent:'center',alignItems:'center'}}>
              <Text style={{ fontFamily: Calibri.bold, color: '#fff',  fontSize: responsiveFontSize(2), }}>Piecs</Text>

                </View>

            </View>
          </TouchableOpacity>
        }

      />

    </View>



  );
};


export default OrderSummary;
