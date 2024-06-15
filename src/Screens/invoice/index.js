
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
const Invoice = ({ props, route, navigation }) => {

  const [adata, setAdata] = useState('available')
  const styles = Styles();


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>

        <View style={{ height: 59, width: '100%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: '#ccc' }}>
          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.5), color: '#555', marginLeft: responsiveScreenWidth(8) }}>Invoice</Text>
        </View>
        <View style={{ width: '90%', alignSelf: 'center',justifyContent:'space-between',flexDirection:'row',marginVertical:4 }}>
        <Text style={{ fontFamily: Calibri.regular, fontSize: responsiveFontSize(2.7), color: '#999', }}>Benficiary Name</Text>
        <Text style={{ fontFamily: Calibri.regular, fontSize: responsiveFontSize(2.7), color: '#999',width:'50%' }}>-Rahul Mishra</Text>
        </View>
        <View style={{ width: '90%', alignSelf: 'center',justifyContent:'space-between',flexDirection:'row',marginVertical:2 }}>
        <Text style={{ fontFamily: Calibri.regular, fontSize: responsiveFontSize(2.7), color: '#999', }}>Bill Name</Text>
        <Text style={{ fontFamily: Calibri.regular, fontSize: responsiveFontSize(2.7), color: '#999',width:'50%' }}>-Sanjeeb Trading</Text>
        </View>
        <View style={{ width: '90%', alignSelf: 'center',justifyContent:'space-between',flexDirection:'row',marginVertical:2 }}>
        <Text style={{ fontFamily: Calibri.regular, fontSize: responsiveFontSize(2.7), color: '#999', }}>Order No</Text>
        <Text style={{ fontFamily: Calibri.regular, fontSize: responsiveFontSize(2.7), color: '#999',width:'50%' }}>-#ORD15252</Text>
        </View>
        <View style={{ width: '90%', alignSelf: 'center',justifyContent:'space-between',flexDirection:'row',marginVertical:2 }}>
        <Text style={{ fontFamily: Calibri.regular, fontSize: responsiveFontSize(2.7), color: '#999', }}>Delivery Address</Text>
        <Text style={{ fontFamily: Calibri.regular, fontSize: responsiveFontSize(2.7), color: '#999',width:'50%' }}>-Lilua howrah ,hyper road ,275654</Text>
        </View>
        <View style={{ width: '90%', alignSelf: 'center',justifyContent:'space-between',flexDirection:'row',marginVertical:2 }}>
        <Text style={{ fontFamily: Calibri.regular, fontSize: responsiveFontSize(2.7), color: '#999', }}>Contact No</Text>
        <Text style={{ fontFamily: Calibri.regular, fontSize: responsiveFontSize(2.7), color: '#999',width:'50%' }}>-654645545</Text>
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
              <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}>Packaging</Text>
                <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}>₹ 850</Text>

              </View>
              <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}>Delivery</Text>
                <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}>₹ 1,195</Text>

              </View>
              <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}>Taxes</Text>
                <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}>N/A</Text>

              </View>
              <View style={{ width: '90%', height: responsiveWidth(8), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.1), color: '#73D26F', }}>Net Amount</Text>
                <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.1), color: '#73D26F', }}>₹ 85,000</Text>

              </View>
              <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}>Reward Points Earned</Text>
                <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.6), color: '#999', }}>186 pts</Text>

              </View>

            </View>

          }
        />
        <TouchableOpacity onPress={() => navigation.navigate('Qrcode')} style={{ height: 56, backgroundColor: '#3AC034', justifyContent: 'center', alignItems: 'center', borderRadius: 14, width: '80%', alignSelf: 'center', marginBottom: 20 }}>
          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4), color: '#fff' }}>SHOW MY QR CODE  <Fontisto name={'angle-right'} color={'#fff'} size={responsiveFontSize(2)} /></Text>

        </TouchableOpacity>

      </ScrollView>
    </View>



  );
};


export default Invoice;
