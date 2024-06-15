
import React, { useEffect, useState } from 'react';
import {
  Text, View, TextInput, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, SafeAreaView, Linking, FlatList, Alert, Platform, ActivityIndicator
} from "react-native";
import Styles from './style';
import { Colors } from '../../Constants/Colors'
import { Calibri } from '../../Constants/Fonts';
import { Images } from '../../Constants/ImageIconContant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveHeight, responsiveWidth, responsiveFontSize, responsiveScreenWidth } from "react-native-responsive-dimensions";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Icon } from 'react-native-basic-elements';
import Swiper from "react-native-swiper";
import { ImageSlider } from "react-native-image-slider-banner";
// create a component
const OrderDetails = ({ props, route, navigation }) => {

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
      <View style={{ height: 59, width: '94%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', }}>
        <AntDesign onPress={()=>navigation.pop()} color={Colors.backgroundColor} name='arrowleft' style={{paddingLeft:5}} size={responsiveFontSize(3.8)} />
        <View style={{ width: '60%' }}>
          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2), color: '#555', marginLeft: 15 }}>Order No. #ORD78745</Text>
          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#ccc', marginLeft: 15 }}>Delivered 3 Packets, ₹ 56,000</Text>
        </View>
        <Image resizeMode='cover' source={require('../../assets/images/noti.png')} style={{ width: responsiveWidth(6), height: responsiveWidth(7), position: 'absolute', right: 15 }} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: '65%', height: responsiveHeight(35), marginLeft: responsiveScreenWidth(4.5), justifyContent: 'space-between' }}>
          <View style={{ position: 'absolute', height: '70%', left: responsiveWidth(6), borderRightWidth: 2, borderStyle: 'dashed', borderColor: '#ccc', bottom: '10%' }} />
          <View style={{ width: '90%', height: '30%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
            <Image resizeMode='contain' source={require('../../assets/images/Layer_22.png')} style={{ width: responsiveWidth(6), height: responsiveWidth(8), tintColor: '#999' }} />
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.6), color: '#73D26F', marginLeft: 15 }}>Distributor's Name</Text>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2), color: '#ccc', marginLeft: 15 }}>Distributor's Address</Text>


            </View>
          </View>
          <View style={{ width: '90%', height: '30%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(3.5), color: '#555', width: responsiveWidth(6), height: responsiveWidth(7), textAlign: 'center' }}>○</Text>

            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.6), color: '#FCBB38', marginLeft: 15 }}>Ferry's Name</Text>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2), color: '#ccc', marginLeft: 15 }}>Ferry's Address</Text>


            </View>
          </View>
          <View style={{ width: '90%', height: '30%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
            <Image resizeMode='contain' source={require('../../assets/images/Layer_22.png')} style={{ width: responsiveWidth(6), height: responsiveWidth(8), tintColor: '#999' }} />
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.6), color: '#555', marginLeft: 15 }}>Customer's Name</Text>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2), color: '#ccc', marginLeft: 15 }}>Customer's Address</Text>


            </View>
          </View>

        </View>
        <View style={{ height: 59, width: '100%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: '#ccc' }}>
          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2), color: '#555', marginLeft: responsiveScreenWidth(8) }}>Order Details</Text>
        </View>
        <FlatList
          data={[...Array(5)]}
          renderItem={() =>
            <>
              <View style={{ width: '90%', height: responsiveWidth(12), alignSelf: 'center', flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ccc', alignItems: 'center' }}>
                {/* <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2), color: '#555', marginLeft: 15 }}>#</Text> */}
                <View style={{ marginLeft: 5 }}>
                  <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2), color: '#999', }}># Product Name</Text>
                  <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}> {'  '}Product Category</Text>


                </View>
                <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2), color: '#999', position: "absolute", right: 0, }}> ₹ 56,500</Text>
              </View>
              <View style={{ width: '90%', height: responsiveWidth(12), alignSelf: 'center', flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ccc', alignItems: 'center' }}>
                {/* <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2), color: '#555', marginLeft: 15 }}>#</Text> */}
                <View style={{ marginLeft: 5 }}>
                  <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#ccc', }}> Size - <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#555', }}> 16 x 20 ft </Text></Text>
                  <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#ccc', }}> GSM - <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#555', }}> 120 GSM </Text></Text>


                </View>
                <View style={{ marginLeft: 15 }}>
                  <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#ccc', }}> Color - <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#555', }}> Blue </Text></Text>
                  <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#ccc', }}> Quantity - <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#555', }}> 3 Package </Text></Text>


                </View>
                <View style={{ marginLeft: 15 }}>

                  <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#ccc', }}> Rate/Packet - <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#555', }}>  ₹7000 </Text></Text>


                </View>
              </View>
            </>
          }
          ListFooterComponent={() =>
            <View>
            <View style={{ width: '90%', height: responsiveWidth(10), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.1), color: '#FCBB38', }}>Gross Amount</Text>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.1), color: '#FCBB38', }}>₹ 45000</Text>

            </View>
            <View style={{ width: '90%',  alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}>Packaging</Text>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}>₹ 850</Text>

            </View>
            <View style={{ width: '90%',  alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}>Delivery</Text>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}>₹ 1,195</Text>

            </View>
            <View style={{ width: '90%',  alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}>Taxes</Text>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}>N/A</Text>

            </View>
            <View style={{ width: '90%', height: responsiveWidth(8), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.1), color: '#73D26F', }}>Net Amount</Text>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.1), color: '#73D26F', }}>₹ 85,000</Text>

            </View>
            <View style={{ width: '90%',  alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',marginBottom:20 }}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}>Reward Points Earned</Text>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}>186 pts</Text>

            </View>
            </View>

          }
        />



      </ScrollView>


    </View>



  );
};


export default OrderDetails;
