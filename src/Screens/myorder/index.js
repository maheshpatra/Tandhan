
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
const MyOrder = ({ props, route, navigation }) => {

  const styles = Styles();
  const mobile_brands = [
    {
      name: 'Model 1',
      image: require('../../assets/model/2.png'),
      price:3443,
      status:'pending'
    },
    {
      name: 'Model 2',
      image: require('../../assets/model/2.png'),
      price:3443,
      status:'reject'
    },
    {
      name: 'Model 2',
      image: require('../../assets/model/2.png'),
      price:3443,
      status:'complete'
    },
    
  ]
  return (
     <View style={{ flex: 1 }}>
      <FlatList
        data={mobile_brands}
        contentContainerStyle={{ width: '92%', alignSelf: 'center', justifyContent: 'flex-end',marginTop:10 }}
       
        renderItem={({ item, index }) =>
          <TouchableOpacity onPress={() => navigation.navigate('YourDevice')} style={{ height: responsiveWidth(26), width: '98%', backgroundColor: '#fff', marginRight: responsiveWidth(5), marginBottom: 20,  alignItems: 'center', borderWidth: 1.5, borderColor: '#ccc', borderRadius: 10, marginLeft: responsiveWidth(1),flexDirection:'row' }}>
            <Image resizeMode='center' source={item.image} style={{ width: responsiveWidth(15), height: responsiveWidth(15),backgroundColor:'#ccc',margin:6 }} />
            <View>
            <Text style={{ fontFamily: Calibri.bold, color: 'black', fontSize:responsiveFontSize(2.5) }}>{item.name}</Text>
            <Text style={{ fontFamily: Calibri.bold, color: 'red', marginTop: 5,fontSize:responsiveFontSize(2) }}>{item.price}</Text>

            </View>
            <Text style={{ fontFamily: Calibri.bold, color: 'black',position:'absolute',right:30,color:item.status=='reject'?'red':item.status=='complete'?Colors.primary:'orange'  }}>{item.status}</Text>
            
          </TouchableOpacity>
        }
      />
    </View>
    
    // <SkeletonPlaceholder >
    //   <SkeletonPlaceholder.Item width={responsiveWidth(92)} height={160} alignSelf='center' borderRadius={10} />
    //   <SkeletonPlaceholder.Item width={responsiveWidth(92)} height={40} alignSelf='center' marginTop={20} borderRadius={10} />
    //   <SkeletonPlaceholder.Item width={responsiveWidth(92)} height={40} alignSelf='center' marginTop={20} borderRadius={10} />
    //   <SkeletonPlaceholder.Item width={responsiveWidth(92)} height={40} alignSelf='center' marginTop={20} borderRadius={10} />
    //   <SkeletonPlaceholder.Item width={responsiveWidth(92)} height={40} alignSelf='center' marginTop={20} borderRadius={10} />
      
     
      

    // </SkeletonPlaceholder>


  );
};


export default MyOrder;
