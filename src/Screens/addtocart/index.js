
import React, { useEffect, useState } from 'react';
import {
  Text, View, TextInput, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, SafeAreaView, Linking, FlatList, Alert, Platform, ActivityIndicator
} from "react-native";
import Styles from './style';
import { Colors } from '../../Constants/Colors'
import { Calibri } from '../../Constants/Fonts';
import { Images } from '../../Constants/ImageIconContant';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Icon } from 'react-native-basic-elements';
import Swiper from "react-native-swiper";
import { ImageSlider } from "react-native-image-slider-banner";
import { Picker } from '@react-native-picker/picker';
// create a component
const Addtocart = ({ props, route, navigation }) => {

  const [adata, setAdata] = useState('available')
  const styles = Styles();
  const [customer, setcustomer] = useState(null)
  const [business, setbusiness] = useState(null)
  const [address, setAddress] = useState(null)
  const [size, setSize] = useState(null)
  const [gsm, setGsm] = useState(null)
  const [unit, setunit] = useState(null)
  const [qun, setqun] = useState(null)


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <Image resizeMode='stretch' source={require('../../assets/images/ecopaulin-star-cvcfbv.png')} style={{ width: '100%', height: responsiveWidth(55) }}
        />
        <View style={{
          borderRadius: 10, width: '70%', height: responsiveWidth(16), backgroundColor: '#fff', elevation: 6, borderRadius: 12, alignSelf: 'center', marginTop: -responsiveWidth(7.5), flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View style={{
            position: 'absolute', borderRadius: 10, width: responsiveWidth(21), height: responsiveWidth(21), backgroundColor: '#fff', elevation: 6, borderRadius: 12, alignSelf: 'center', marginTop: -responsiveWidth(5), flexDirection: 'row',
            alignItems: 'center'
          }}>



          </View>
          <View style={{
            position: 'absolute',
            right: 10,
            width: '66%',
            alignSelf: 'flex-end',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{
              fontFamily: Calibri.bold,
              fontSize: responsiveFontSize(3.2),
              color: Colors.backgroundColor,
              marginLeft: 15
            }}
            >TARPAULIN
            </Text>
            <Text style={{
              fontFamily: Calibri.regular,
              fontSize: responsiveFontSize(2),
              color: Colors.backgroundColor,
              marginLeft: 15
            }}
            >TR-B1620
            </Text>
          </View>

        </View>

        <View style={{ width: '90%', borderRadius: 16, backgroundColor: '#E2E2E2', alignSelf: 'center', marginTop: 20 }}>
          <Picker
            style={{ padding: 5, paddingLeft: 35 }}
            selectedValue={customer}

            onValueChange={(itemValue, itemIndex) =>
              setcustomer(itemValue)
            }>
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="CUSTOMER NAME" />
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Amai ast" value="Amai ast" />
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Amai terr" value="Amai terr" />

          </Picker>
        </View>
        <View style={{ width: '90%', borderRadius: 16, backgroundColor: '#E2E2E2', alignSelf: 'center', marginTop: 20 }}>
          <Picker
            style={{ padding: 5, paddingLeft: 35 }}
            selectedValue={business}
            onValueChange={(itemValue, itemIndex) =>
              setbusiness(itemValue)
            }>
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="BUSINESS NAME" />
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Amai ast" value="Amai ast" />
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Amai terr" value="Amai terr" />

          </Picker>
        </View>
        <View style={{ width: '90%', borderRadius: 16, backgroundColor: '#E2E2E2', alignSelf: 'center', marginTop: 20 }}>
          <Picker
            style={{ padding: 5, paddingLeft: 35 }}
            selectedValue={address}
            onValueChange={(itemValue, itemIndex) =>
              setAddress(itemValue)
            }>
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="ADDRESS" />
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Amai ast" value="Amai ast" />
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Amai terr" value="Amai terr" />

          </Picker>
        </View>
        <View style={{ width: '90%', borderRadius: 16, backgroundColor: '#E2E2E2', alignSelf: 'center', marginTop: 20 }}>
          <Picker
            style={{ padding: 5, paddingLeft: 35 }}
            selectedValue={gsm}
            onValueChange={(itemValue, itemIndex) =>
              setGsm(itemValue)
            }>
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="GSM" />
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Amai ast" value="Amai ast" />
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Amai terr" value="Amai terr" />

          </Picker>
        </View>

        <View style={{ width: '90%', borderRadius: 16, backgroundColor: '#E2E2E2', alignSelf: 'center', marginTop: 20 }}>
          <Picker
            style={{ padding: 5, paddingLeft: 35 }}
            selectedValue={gsm}
            onValueChange={(itemValue, itemIndex) =>
              setSize(itemValue)
            }>
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="SIZE" />
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Amai ast" value="Amai ast" />
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Amai terr" value="Amai terr" />

          </Picker>
        </View>

        <View style={{ width: '90%', borderRadius: 16, backgroundColor: '#E2E2E2', alignSelf: 'center', marginTop: 20 }}>
          <Picker
            style={{ padding: 5, paddingLeft: 35 }}
            selectedValue={unit}
            onValueChange={(itemValue, itemIndex) =>
              setunit(itemValue)
            }>
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="UNIT" />
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Amai ast" value="Amai ast" />
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Amai terr" value="Amai terr" />

          </Picker>
        </View>
        <View style={{ width: '90%', borderRadius: 16, backgroundColor: '#E2E2E2', alignSelf: 'center', marginTop: 20 }}>
          <Picker
            style={{ padding: 5, paddingLeft: 35 }}
            selectedValue={qun}
            onValueChange={(itemValue, itemIndex) =>
              setqun(itemValue)
            }>
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="QUANTITY" />
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Amai ast" value="Amai ast" />
            <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Amai terr" value="Amai terr" />

          </Picker>
        </View>
        <View style={{ width: '80%', alignSelf: 'center', height: 30, justifyContent: 'space-between', flexDirection: 'row', marginVertical: 20 }}>
          <Text onPress={() => setAdata('available')} style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.5), color: Colors.backgroundColor, }}><Fontisto name={adata == 'available' ? 'radio-btn-active' : 'radio-btn-passive'} color={adata == 'available' ? '#3AC034' :Colors.backgroundColor} size={responsiveFontSize(2)} /> AVAILABLE </Text>
          <Text onPress={() => setAdata('unavailable')} style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.5), color: Colors.backgroundColor, }}><Fontisto name={adata == 'unavailable' ? 'radio-btn-active' : 'radio-btn-passive'} color={adata == 'unavailable' ? '#3AC034' :Colors.backgroundColor} size={responsiveFontSize(2)} /> UNAVAILABLE</Text>

        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('Invoice')} style={{height:60,backgroundColor:'#848484',justifyContent:'center',alignItems:'center',borderRadius:14,width:'90%',alignSelf:'center',marginBottom:20}}>
        <Text  style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.9), color: '#fff' }}>ADD TO CART  <Fontisto name={'angle-right'} color={'#fff'} size={responsiveFontSize(2.5)} /></Text>

        </TouchableOpacity>
      </ScrollView>
    </View>



  );
};


export default Addtocart;
