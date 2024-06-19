
import React, { useEffect, useState } from 'react';
import {
  Text, View, TextInput, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, SafeAreaView, Linking, FlatList, Alert, Platform, ActivityIndicator,
  StatusBar
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
const Home = ({ props, route, navigation }) => {

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
    }
  ]
  

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={{ height: 59, width: '94%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', paddingBottom: 6 }}>
        <Image source={require('../../assets/images/logo.png')} style={{ width: responsiveWidth(13), height: responsiveWidth(13), marginTop: 10 }} />
        <Image resizeMode='cover' source={require('../../assets/images/tandhan.png')} style={{ width: responsiveWidth(60), height: responsiveWidth(13), marginLeft: 10 }} />
        <Image resizeMode='cover' source={require('../../assets/images/noti.png')} style={{ width: responsiveWidth(6), height: responsiveWidth(7), position: 'absolute', right: 15 }} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 50, width: '94%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderRadius: 20, backgroundColor: '#e2e2e2', marginTop: 10, }}>
          <TextInput
            style={{ height: '100%', width: '90%', paddingLeft: 16 }}
            placeholder='Search'
            placeholderTextColor={Colors.backgroundColor}
          />
          <Image resizeMode='cover' source={require('../../assets/images/search.png')} style={{ width: responsiveWidth(5), height: responsiveWidth(5), }} />
        </View>

        <View style={{ width: '92%', height: 210, alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>
          <ImageSlider
            data={[
              { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
              { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
              { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' }
            ]}
            preview={false}
            autoPlay={false}
            inActiveIndicatorStyle={{ backgroundColor: '#ccc' }}
            indicatorContainerStyle={{ position: 'absolute', bottom: -15 }}
            onItemChanged={(item) => console.log("item", item)}
            caroselImageStyle={{ resizeMode: 'contain', height: 250, width: responsiveWidth(100) }}
            caroselImageContainerStyle={{ height: 210, marginHorizontal: 0, marginTop: -35, marginBottom: 0 }}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AllCategory')} style={{ borderRadius: 15, backgroundColor: '#3AC034', width: '40%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
          <Text style={{ fontFamily: Calibri.regular, color: 'black', color: '#FFF', paddingHorizontal: 15, paddingVertical: 5, fontSize: responsiveFontSize(2.2) }}>CATEGORIES</Text>

        </TouchableOpacity>

        <View style={{ width: '100%', alignSelf: 'center' }}>

          <FlatList
            data={mobile_brands}
            contentContainerStyle={{ width: '92%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}
            numColumns={2}
            renderItem={({ item, index }) =>
              <TouchableOpacity onPress={() => navigation.navigate('Addtocart')} style={{ height: responsiveWidth(37), width: responsiveWidth(38), backgroundColor: '#fff', marginRight: responsiveWidth(5), marginBottom: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginLeft: responsiveWidth(1), }}>
                <Image resizeMode='cover' source={item.image} style={{ width: '100%', height: responsiveWidth(30) }} />
                <Text style={{ fontFamily: Calibri.regular, color: 'black', marginTop: 5, color: Colors.backgroundColor }}>{item.name}</Text>

              </TouchableOpacity>
            }
            ListFooterComponent={() =>

              <TouchableOpacity onPress={() => navigation.navigate('Addtocart')} style={{ height: responsiveWidth(37), width: responsiveWidth(80), backgroundColor: '#fff',  marginBottom: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10,  }}>
                <Image resizeMode='cover' source={require('../../assets/images/tents.png')} style={{ width: '100%', height: responsiveWidth(30) }} />
                <Text style={{ fontFamily: Calibri.regular, color: 'black', marginTop: 5, color: Colors.backgroundColor }}>{'DECORATIVE'}</Text>

              </TouchableOpacity>

            }
          />
        </View>
      </ScrollView>
    </View>
    // <SkeletonPlaceholder >
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={200} alignSelf='center' borderRadius={10} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={87} alignSelf='center' marginTop={20} borderRadius={10} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={87} alignSelf='center' marginTop={20}borderRadius={10} />
    //    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" justifyContent='space-between'>
    //    <SkeletonPlaceholder.Item width={100} height={20} marginTop={20} marginLeft={18} />
    //    <SkeletonPlaceholder.Item width={60} height={20} marginTop={20} marginRight={18} />
    //    </SkeletonPlaceholder.Item>
    //    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" justifyContent='space-between'>
    //    <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginLeft={18} />
    //    <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} />
    //    <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginRight={18} />
    //    </SkeletonPlaceholder.Item>
    //    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" justifyContent='space-between' marginTop={10} borderRadius={10}>
    //    <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginLeft={18} />
    //    <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} />
    //    <SkeletonPlaceholder.Item width={responsiveWidth(26)} height={responsiveWidth(26)} marginTop={20} marginRight={18} />
    //    </SkeletonPlaceholder.Item>

    // </SkeletonPlaceholder>


  );
};


export default Home;
