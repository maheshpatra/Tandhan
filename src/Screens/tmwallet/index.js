
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
const Tmwallet = ({ props, route, navigation }) => {

  const styles = Styles();
  const data = ['LAST 10', 'LAST WEEK', 'LAST MONTH', 'CUSTOM']
  const [adata, setAdata] = useState(null)
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ height: 50, width: '94%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', paddingBottom: 6 }}>
        <Image resizeMode='cover' source={require('../../assets/images/noti.png')} style={{ width: responsiveWidth(6), height: responsiveWidth(7), position: 'absolute', right: 15 }} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 60, width: '91%', alignSelf: 'center', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', tintColor: Colors.backgroundColor }}>
          <Image resizeMode='stretch' source={require('../../assets/images/tmw.png')} style={{ width: responsiveWidth(18), height: responsiveWidth(14), tintColor: Colors.backgroundColor }} />
          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(3.5), color: '#000', marginLeft: 15 }}>TM Wallet</Text>
        </View>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => setAdata(item)} style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: '45%', alignSelf: 'center', height: responsiveWidth(12), marginTop: 20, borderColor: Colors.backgroundColor, justifyContent: 'center', borderWidth: 1.5, borderRadius: 12, marginLeft: 12, backgroundColor: item == adata ? Colors.backgroundColor : '#fff' }}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.1), color: item == adata ? '#fff' : Colors.backgroundColor, marginLeft: 10 }}>{item}</Text>
            </TouchableOpacity>
          }
        />
        <View style={{ width: '70%', alignSelf: 'center', height: 59, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 20, }}>
          <TouchableOpacity onPress={() => navigation.navigate('Brand')} style={{ marginTop: 10, borderRadius: 15, backgroundColor: '#fff', elevation: 10, width: '45%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 12, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontStyle: 'italic', fontFamily: Calibri.bold, color: Colors.backgroundColor, paddingHorizontal: 15, paddingVertical: 5, fontSize: responsiveFontSize(2.6) }}>From</Text>
            <AntDesign name='down' color={Colors.backgroundColor} size={responsiveFontSize(2.3)} style={{ marginLeft: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Brand')} style={{ marginTop: 10, borderRadius: 15, backgroundColor: '#fff', elevation: 10, width: '45%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 12, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontStyle: 'italic', fontFamily: Calibri.bold, color: Colors.backgroundColor, paddingHorizontal: 15, paddingVertical: 5, fontSize: responsiveFontSize(2.6) }}>To</Text>
            <AntDesign name='down' color={Colors.backgroundColor} size={responsiveFontSize(2.3)} style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        </View>


        <TouchableOpacity onPress={() => navigation.navigate('Brand')} style={{ marginTop: 10, borderRadius: 15, backgroundColor: '#fff', elevation: 10, width: '40%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
          <Text style={{ fontStyle: 'italic', fontFamily: Calibri.bold, color: Colors.backgroundColor, paddingHorizontal: 15, paddingVertical: 5, fontSize: responsiveFontSize(2.6) }}>Download</Text>
        </TouchableOpacity>

        <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2), color: '#555', marginRight: 15, alignSelf: 'flex-end', marginTop: 20 }}>Tandhan Balance 147pts</Text>
        <View style={{ width: '90%', alignSelf: 'center', elevation: 10, marginVertical: 20, borderRadius: 10, backgroundColor: '#fff', }}>
          {/* item */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: Colors.backgroundColor, height: 50, width: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center', padding: 5,marginLeft:5 }}>
              <Text style={{ fontFamily: Calibri.bold, color: '#fff', fontSize: responsiveFontSize(2), textAlign: 'center' }}>{"10 may"}</Text>

            </View>
            <View style={{ justifyContent: 'space-between', height: responsiveWidth(12), width: '80%', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', borderBottomWidth: 1, margin: 8,borderTopWidth:1,}}>
              <Text># Transaction Id</Text>
              <Text>Reward -21</Text>
              <Text>21000</Text>
            </View>
          </View>
          {/* item */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: Colors.backgroundColor, height: 50, width: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center', padding: 5,marginLeft:5 }}>
              <Text style={{ fontFamily: Calibri.bold, color: '#fff', fontSize: responsiveFontSize(2), textAlign: 'center' }}>{"10 may"}</Text>

            </View>
            <View style={{ justifyContent: 'space-between', height: responsiveWidth(12), width: '80%', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', borderBottomWidth: 1, margin: 8,borderTopWidth:1,}}>
              <Text># Transaction Id</Text>
              <Text>Reward -21</Text>
              <Text>21000</Text>
            </View>
          </View>
          {/* item */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: Colors.backgroundColor, height: 50, width: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center', padding: 5,marginLeft:5 }}>
              <Text style={{ fontFamily: Calibri.bold, color: '#fff', fontSize: responsiveFontSize(2), textAlign: 'center' }}>{"10 may"}</Text>

            </View>
            <View style={{ justifyContent: 'space-between', height: responsiveWidth(12), width: '80%', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', borderBottomWidth: 1, margin: 8,borderTopWidth:1,}}>
              <Text># Transaction Id</Text>
              <Text>Reward -21</Text>
              <Text>21000</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Rewards')} style={{ flexDirection: 'row', alignItems: 'center', width: '47%', alignSelf: 'center', height: responsiveWidth(12), backgroundColor: Colors.backgroundColor, justifyContent: 'center', borderRadius: 12, alignSelf: 'center', marginTop: 20 }}>
          <Image source={require('../../assets/images/gift-box-benefits_15859114.png')} style={{ tintColor: '#fff', height: responsiveWidth(7), width: responsiveWidth(7) }} />
          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.3), color: '#fff', marginLeft: 10 }}>Rewards</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};


export default Tmwallet;
