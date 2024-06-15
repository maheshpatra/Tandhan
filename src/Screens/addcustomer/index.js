
import React, { useEffect, useState } from 'react';
import {
  Text, View, TextInput, ScrollView, Image, Pressable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, SafeAreaView, Linking, FlatList, Alert, Platform, ActivityIndicator,

} from "react-native";
import Styles from './style';
import { Colors } from '../../Constants/Colors'
import { Calibri } from '../../Constants/Fonts';
import { Images } from '../../Constants/ImageIconContant';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Icon } from 'react-native-basic-elements';
import Swiper from "react-native-swiper";
import { ImageSlider } from "react-native-image-slider-banner";
import Modal from "react-native-modal";
import { Picker } from '@react-native-picker/picker';
// create a component
const AddCustomer = ({ props, route, navigation }) => {
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
  const close = () => {
    setredeem(true)
  };
  useEffect(() => {
    setTimeout(() => {
      setredeem(false)
      setModalVisible(false);
    }, 5000);
  }, [redeem]);

  const styles = Styles();
  const [adata, setAdata] = useState('add')
  const [selectcustomer, setSelectcustomer] = useState(null)
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 60, width: '91%', alignSelf: 'center', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', tintColor: Colors.backgroundColor }}>
          {/* <Image resizeMode='stretch' source={require('../../assets/images/gift-box-benefits_15859114.png')} style={{ width: responsiveWidth(12), height: responsiveWidth(12), tintColor: Colors.backgroundColor }} /> */}
          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.5), color: '#000', }}>ADD / EDIT CUSTOMERS</Text>
        </View>
        <View style={{ width: '50%', alignSelf: 'center', height: 30, justifyContent: 'space-between', flexDirection: 'row', marginVertical: 20 }}>
          <Text onPress={()=>setAdata('add')} style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.5), color: Colors.backgroundColor, }}><Fontisto name={adata=='add'?'radio-btn-active':'radio-btn-passive'} color={Colors.backgroundColor} size={responsiveFontSize(2)} /> Add </Text>
          <Text onPress={()=>setAdata('edit')} style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.5), color: Colors.backgroundColor, }}><Fontisto name={adata=='edit'?'radio-btn-active':'radio-btn-passive'} color={Colors.backgroundColor} size={responsiveFontSize(2)} /> Edit</Text>

        </View>

        <View style={{ width: '90%', alignSelf: 'center', }}>
          

            <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.3), color: Colors.backgroundColor }}>
              {adata=='add'?"Add":"Edit"} Customer
            </Text>
           {adata=='edit' && <View style={{width:'100%',borderRadius:16,borderRadius:10,marginTop:10,borderWidth:1,borderColor:'#ccc',alignSelf:'center',marginBottom:10}}>
              <Picker
                style={{padding:5}}
                 selectedValue={selectcustomer}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectcustomer(itemValue)
                }>
                <Picker.Item style={{fontFamily:Calibri.bold}} label="Abir Patra" value="Abir Patra" />
                <Picker.Item  style={{fontFamily:Calibri.bold}} label="Bishal Roy" value="Bishal Roy" />
                <Picker.Item  style={{fontFamily:Calibri.bold}} label="Mukesh Roy" value="Mhkesh Roy" />
              </Picker>
              </View>}

            <View style={{width:'100%',alignSelf:'center',height:responsiveWidth(12),borderRadius:10,marginTop:10,borderWidth:1,borderColor:'#ccc'}}>
            <TextInput placeholderTextColor={'#ccc'} placeholder='Customer Name' style={{fontFamily:Calibri.bold, width:'97%',alignSelf:'center',height:'100%',fontSize:responsiveFontSize(2)}} />
            </View>
            <View style={{width:'100%',alignSelf:'center',height:responsiveWidth(12),borderRadius:10,marginTop:10,borderWidth:1,borderColor:'#ccc'}}>
            <TextInput placeholderTextColor={'#ccc'} placeholder='Company Name' style={{fontFamily:Calibri.bold, width:'97%',alignSelf:'center',height:'100%',fontSize:responsiveFontSize(2)}} />
            </View>
            <View style={{width:'100%',alignSelf:'center',height:responsiveWidth(12),borderRadius:10,marginTop:10,borderWidth:1,borderColor:'#ccc'}}>
            <TextInput placeholderTextColor={'#ccc'} placeholder='Contact Number' style={{fontFamily:Calibri.bold, width:'97%',alignSelf:'center',height:'100%',fontSize:responsiveFontSize(2)}} />
            </View>
            <View style={{width:'100%',alignSelf:'center',height:responsiveWidth(12),borderRadius:10,marginTop:10,borderWidth:1,borderColor:'#ccc'}}>
            <TextInput placeholderTextColor={'#ccc'} placeholder='Address' style={{fontFamily:Calibri.bold, width:'97%',alignSelf:'center',height:'100%',fontSize:responsiveFontSize(2)}} />
            </View>
            <View style={{width:'100%',alignSelf:'center',height:responsiveWidth(12),borderRadius:10,marginTop:10,borderWidth:1,borderColor:'#ccc'}}>
            <TextInput placeholderTextColor={'#ccc'} placeholder='Pin Code' style={{fontFamily:Calibri.bold, width:'97%',alignSelf:'center',height:'100%',fontSize:responsiveFontSize(2)}} />
            </View>
        



        </View>



        <TouchableOpacity onPress={() => navigation.navigate('Brand')} style={{ marginTop: 20, borderRadius: 8, backgroundColor: '#3AC034', width: '60%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
          <Text style={{ fontFamily: Calibri.regular, color: Colors.white, paddingHorizontal: 16, paddingVertical: 6, fontSize: responsiveFontSize(2.8) }}>Submit</Text>
        </TouchableOpacity>

        


      </ScrollView>


    </View>
  );
};


export default AddCustomer;
