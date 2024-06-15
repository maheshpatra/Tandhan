
import React, { useEffect, useState } from 'react';
import {
  Text, View, TextInput, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, SafeAreaView, Linking, FlatList, Alert, Platform, ActivityIndicator
} from "react-native";
import Styles from './style';
import { Colors } from '../../Constants/Colors'
import { Calibri } from '../../Constants/Fonts';
import { Images } from '../../Constants/ImageIconContant';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { responsiveHeight, responsiveWidth, responsiveFontSize, responsiveScreenWidth } from "react-native-responsive-dimensions";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Icon } from 'react-native-basic-elements';
import Swiper from "react-native-swiper";
import { ImageSlider } from "react-native-image-slider-banner";
import { Picker } from '@react-native-picker/picker';
// create a component
const Qrcode = ({ props, route, navigation }) => {

  const [adata, setAdata] = useState('available')
  const styles = Styles();


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
     
     <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(3.5), color: '#999',alignSelf:'center' }}>QR Code</Text>
       
        

        
        <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ height: 56, backgroundColor: '#3AC034', justifyContent: 'center', alignItems: 'center', borderRadius: 14, width: '80%', alignSelf: 'center', position:'absolute',bottom:'5%' }}>
          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4), color: '#fff' }}>Back To Home</Text>

        </TouchableOpacity>

      
    </View>



  );
};


export default Qrcode;
