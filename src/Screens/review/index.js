
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
import Swiper from "react-native-swiper";
import { ImageSlider } from "react-native-image-slider-banner";
import Icon from 'react-native-vector-icons/FontAwesome';
// create a component
const Review = ({ props, route, navigation }) => {

  const styles = Styles();
  const data = ['Cash-In', 'Offer & Schemes', 'Gifts & Prizes']
  const [adata, setAdata] = useState(null)
  const [rating, setRating] = useState(0);
  const [submit, setSubmit] = useState(false);

  const handlePress = (star) => {
    setRating(star);
    
      console.log(star)
    
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 60, width: '91%', alignSelf: 'center', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', tintColor: Colors.backgroundColor }}>
          <Image resizeMode='stretch' source={require('../../assets/images/37rating.png')} style={{ width: responsiveWidth(10), height: responsiveWidth(10), tintColor: Colors.backgroundColor }} />
          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(3.4), color: Colors.backgroundColor, marginLeft: 15 }}>Review & Feedback</Text>
        </View>
        <View style={{flexDirection:'row',alignSelf:'center',marginVertical:20}}>
        {[...Array(5)].map((_, index) => (
        <TouchableOpacity style={{marginHorizontal:10}} key={index} onPress={() => handlePress(index + 1)}>
          <Icon
            name={index < rating ? 'star' : 'star-o'}
            size={responsiveFontSize(4)}
            color={Colors.backgroundColor}
          />
        </TouchableOpacity>
      ))}
        </View>
        <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.8), color: '#555', alignSelf:'center',marginTop:20}}>Rate us on google</Text>
        
        <View style={{margin:10, alignSelf:'center',width:responsiveWidth(25),height:responsiveWidth(25),backgroundColor:'#fff',elevation:6,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
        <Image resizeMode='contain' source={require('../../assets/images/play.png')} style={{ width: responsiveWidth(18), height: responsiveWidth(18),  }} />
        
        </View>
        <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.5), color: Colors.backgroundColor, marginLeft: 25,marginTop:30 }}>Share Your Feedback</Text>
           {!submit ?<View style={{width:'90%',height:responsiveWidth(40),backgroundColor:'#fff',elevation:6,borderRadius:18,alignSelf:'center',margin:10}}>
           <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.8), color: '#555', marginLeft: 15,marginTop:10 }}>Description</Text>
            <TextInput 
            
            style={{paddingLeft:15,width:'90%',}}
            numberOfLines={5}
            />
           </View>:
           <View style={{width:'90%',height:responsiveWidth(40),backgroundColor:'#fff',elevation:6,borderRadius:18,alignSelf:'center',margin:10,justifyContent:'center',alignItems:'center'}}>
           <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.8), color: '#555', }}>Thank You For Your Feedback</Text>
            
           </View>}

           <TouchableOpacity onPress={() => { setSubmit(true)}} style={{ marginTop: 15, borderRadius: 8, backgroundColor:!submit? '#848484':'#E2E2E2', width: '40%', justifyContent: 'center', alignItems: 'center', marginBottom: 12,marginLeft:20 }}>
          <Text style={{ fontFamily: Calibri.bold, color: Colors.white, paddingHorizontal: 12, paddingVertical: 6, fontSize: responsiveFontSize(2.8) }}>Submit</Text>
        </TouchableOpacity>

        
        


        

       

        
      </ScrollView>
    </View>
  );
};


export default Review;
