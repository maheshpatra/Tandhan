
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
const AllCategory = ({ props, route, navigation }) => {

  const styles = Styles();
  const mobile_brands = [
    {
      name: 'TARPULINS',
      image: require('../../assets/images/ecopaulin-star-big-image.png'),
    },
    {
      name: 'SHADENETS',
      image: require('../../assets/images/shadenet.65d7cbf3.png'),
    },
    {
      name: 'PIPES',
      image: require('../../assets/images/ecorun-img3.png'),
    },
    {
      name: 'SEASONAL',
      image: require('../../assets/images/peo.png'),
    },
    {
      name: 'DECORATIVE',
      image: require('../../assets/images/bg.png'),
    }
  ]
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

      <View style={{ height: 50, width: '92%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#848484', borderRadius: 10 }}>


        <Text style={{
          fontFamily: Calibri.regular,
          fontSize: responsiveFontSize(3),
          color: Colors.white,
          marginLeft: 15
        }}
        >ALL CATEGORY
        </Text>
      </View>
      <View style={{ height: 50, width: '94%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderRadius: 20, backgroundColor: '#e2e2e2', marginTop: 15, }}>
        <TextInput
          style={{ height: '100%', width: '90%', paddingLeft: 16, fontFamily: Calibri.bold }}
          placeholder='Search'
          placeholderTextColor={Colors.backgroundColor}
        />
        <Image resizeMode='cover' source={require('../../assets/images/search.png')} style={{ width: responsiveWidth(5), height: responsiveWidth(5), }} />
      </View>
      <View style={{ width: '55%', position: 'absolute', right: responsiveWidth(5), height: responsiveHeight(17),  top: '20%' }}>

        <View style={{ flexDirection: 'row', alignItems: 'center',alignSelf:'flex-start' }}>
          <View style={{ backgroundColor: '#0451A5', height: 40, width: 40, borderRadius: 10 }} />
          <Text style={{ color: '#999' }}> Blue </Text>
          <View style={{ backgroundColor: '#3AC034', height: 40, width: 40, borderRadius: 10,marginLeft:responsiveWidth(7) }} />
          <Text style={{ color: '#999' }}> Green </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:20,alignSelf:'flex-start' }}>
          <View style={{ backgroundColor: '#FCA802', height: 40, width: 40, borderRadius: 10 }} />
          <Text style={{ color: '#999' }}> Yellow </Text>
          <View style={{ backgroundColor: '#262727', height: 40, width: 40, borderRadius: 10,marginLeft:responsiveWidth(4) }} />
          <Text style={{ color: '#999' }}> Black </Text>
        </View>
      </View>
      <View style={{ backgroundColor: '#262727', marginTop: 15, width: '35%', height: '82%', paddingLeft: responsiveWidth(3.5), paddingRight: 10, borderTopRightRadius: 20 }}>
        <FlatList
          data={mobile_brands}
          contentContainerStyle={{ marginTop: 15,paddingBottom:25 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) =>
            <TouchableOpacity onPress={() => navigation.navigate('Model')} style={{ height: responsiveWidth(30), width: responsiveWidth(30), justifyContent: 'center', alignItems: 'center', borderRadius: 10, }}>
              <Image resizeMode='contain' source={item.image} style={{ width: '100%', height: responsiveWidth(24) }} />
              <Text style={{ fontFamily: Calibri.regular, color: '#eee', marginTop: 5, }}>{item.name}</Text>

            </TouchableOpacity>
          }

        />
      </View>


    </View>



  );
};


export default AllCategory;
