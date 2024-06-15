
import React, { useEffect, useState } from 'react';
import {
  Text, View, TextInput, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, SafeAreaView, Linking, FlatList, Alert, Platform, ActivityIndicator,

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
import Modal from "react-native-modal";
import { Picker } from '@react-native-picker/picker';
// create a component
const Ticket = ({ props, route, navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modaltype, setModatype] = useState(null);
  const [redeem, setredeem] = useState(false);
  const offers = [
    'Thailand',
    'Goa',
    'Abhudabi'
  ]
  const prize = [
    require('../../assets/images/fr.png'),
    require('../../assets/images/fr.png'),
    require('../../assets/images/fr.png')
  ]

  const toggleModal = (item) => {
    setModalVisible(!isModalVisible);
    setModatype(item)
  };
  const clicksubmit = () => {
    setsubmit(true)
  };


  const styles = Styles();
  const data = ['Cash-In', 'Offer & Schemes', 'Gifts & Prizes']
  const [adata, setAdata] = useState(null)
  const [issue, setIssue] = useState(null)
  const [submit, setsubmit] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 60, width: '91%', alignSelf: 'center', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', tintColor: Colors.backgroundColor }}>
          <Image resizeMode='stretch' source={require('../../assets/images/ticket_221984.png')} style={{ width: responsiveWidth(13), height: responsiveWidth(8), tintColor: '#555' }} />
          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(3.5), color: '#555', marginLeft: 15 }}>Raise a Ticket</Text>
        </View>
        {!submit?<View style={{
          width: '90%', backgroundColor: '#fff',
          height: responsiveHeight(48), alignSelf: 'center', borderRadius: 10, elevation: 8, marginTop: '10%'
        }}> 

          
          <Text style={{ marginLeft: 25, marginTop: responsiveWidth(3), fontFamily: Calibri.bold }}>Please Select Your Issue</Text>
          <View style={{ width: '90%', borderRadius: 16, backgroundColor: '#E2E2E2', alignSelf: 'center', marginTop: 5 }}>
            <Picker
              style={{ padding: 5, paddingLeft: 35 }}
              selectedValue={issue}
              onValueChange={(itemValue, itemIndex) =>
                setIssue(itemValue)
              }>
              <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Issue" />
              <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Amai ast" value="Amai ast" />
              <Picker.Item style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4) }} label="Amai terr" value="Amai terr" />

            </Picker>
          </View>

          <Text style={{ marginLeft: 25, marginTop: responsiveWidth(15), fontFamily: Calibri.bold }}>Please State Your Issue And Press Submit</Text>
          <View style={{

            padding: 5,
            borderRadius: 11,
            backgroundColor: '#E2E2E2',
            width:'90%',
            alignSelf:'center',
            marginTop:10
          }}>
            <TextInput
              style={{
                height: 150,
                justifyContent: "flex-start"
              }}
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
            />
          </View>
         
        </View>:
        <View style={{
          width: '90%', backgroundColor: '#fff',
          height: responsiveHeight(50), alignSelf: 'center', borderRadius: 10, elevation: 8, margin: '10%',justifyContent:'center',alignItems:'center'
        }}> 
         <Image resizeMode='stretch' source={require('../../assets/images/checkbox.png')} style={{ width: responsiveWidth(22), height: responsiveWidth(22), tintColor: '#555' }} />
         <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4), color: '#999' }}>Issue Registered</Text>
         <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2), color: '#999' }}>Ticket Number</Text>
         <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2), color: '#999' }}>#43455</Text>
        </View>
        
        }

{submit && <View style={{height:90,width:'60%',alignSelf:'center',backgroundColor:'#3AC034',justifyContent:'center',borderRadius:14,paddingHorizontal:6}}>
<Text style={{fontFamily:Calibri.regular,color:'#fff' ,fontSize:responsiveFontSize(2.2),marginHorizontal:10,textAlign:'center'}}>For Further Assitance Call on our Toll Free Number 1800 5566 666</Text>
</View>
}



        {!submit && <TouchableOpacity onPress={clicksubmit} style={{ marginTop: 15, borderRadius: 15, backgroundColor: '#3AC034', width: '75%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
          <Text style={{ fontFamily: Calibri.regular, color: Colors.white, paddingHorizontal: 16, paddingVertical: 6, fontSize: responsiveFontSize(2.9) }}>Submit</Text>
        </TouchableOpacity>}




      </ScrollView>


    </View>
  );
};


export default Ticket;
