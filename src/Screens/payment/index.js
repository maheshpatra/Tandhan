
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
const Payment = ({ props, route, navigation }) => {
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
  const [adata, setAdata] = useState('new')
  const [selectcustomer, setSelectcustomer] = useState(null)
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 60, width: '91%', alignSelf: 'center', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', tintColor: Colors.backgroundColor }}>
          <Image resizeMode='stretch' source={require('../../assets/images/13-route.png')} style={{ width: responsiveWidth(12), height: responsiveWidth(12), tintColor: '#555' }} />
          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(3.5), color: '#999', marginLeft: 15 }}>Track Payment</Text>
        </View>
        <View style={{ width: '50%', alignSelf: 'center', height: 30, justifyContent: 'space-between', flexDirection: 'row', marginVertical: 20 }}>
          <Text onPress={() => setAdata('new')} style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.5), color: '#999', }}><Fontisto name={adata == 'new' ? 'radio-btn-active' : 'radio-btn-passive'} color={'#999'} size={responsiveFontSize(2)} /> New </Text>
          <Text onPress={() => setAdata('track')} style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.5), color: '#999', }}><Fontisto name={adata == 'track' ? 'radio-btn-active' : 'radio-btn-passive'} color={'#999'} size={responsiveFontSize(2)} /> Track</Text>

        </View>

        <View style={{ width: '90%', alignSelf: 'center', }}>


          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.3), color: '#999' }}>
            Company Name
          </Text>
          <View style={styles.scointainer}>
            <Picker
              style={{ padding: 5 }}
              selectedValue={selectcustomer}
              onValueChange={(itemValue, itemIndex) =>
                setSelectcustomer(itemValue)
              }>
              <Picker.Item style={{ fontFamily: Calibri.bold }} label="" value="" />
              <Picker.Item style={{ fontFamily: Calibri.bold }} label="Bishal Roy" value="Bishal Roy" />
              <Picker.Item style={{ fontFamily: Calibri.bold }} label="Mukesh Roy" value="Mhkesh Roy" />
            </Picker>
          </View>
         {adata == 'new' ?<>
          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.3), color: '#999' }}>
            Order Id
          </Text>
          <View style={styles.scointainer}>
            <Picker
              style={{ padding: 5 }}
              selectedValue={selectcustomer}
              onValueChange={(itemValue, itemIndex) =>
                setSelectcustomer(itemValue)
              }>
              <Picker.Item style={{ fontFamily: Calibri.bold }} label="" />
              <Picker.Item style={{ fontFamily: Calibri.bold }} label="Bishal Roy" value="Bishal Roy" />
              <Picker.Item style={{ fontFamily: Calibri.bold }} label="Mukesh Roy" value="Mhkesh Roy" />
            </Picker>
          </View>

          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.3), color: '#999' }}>
            No. of Installment
          </Text>
          <View style={styles.scointainer}>
            <Picker
              style={{ padding: 5 }}
              selectedValue={selectcustomer}
              onValueChange={(itemValue, itemIndex) =>
                setSelectcustomer(itemValue)
              }>
              <Picker.Item style={{ fontFamily: Calibri.bold }} label="" />
              <Picker.Item style={{ fontFamily: Calibri.bold }} label="Bishal Roy" value="Bishal Roy" />
              <Picker.Item style={{ fontFamily: Calibri.bold }} label="Mukesh Roy" value="Mhkesh Roy" />
            </Picker>
          </View>
          <View style={{ width: '95%', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={styles.ptext}>
              Installment no
            </Text>
            <Text style={styles.ptext}>
              Date
            </Text>
            <Text style={styles.ptext}>
              Amount
            </Text>
            <Text style={styles.ptext}>
              Status
            </Text>
          </View>
          <View style={{ width: '95%', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: '#999' }}>
                1
              </Text>
            </View>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: Colors.backgroundColor, textAlign: 'center', width: '80%' }}>
                19 May 2024
              </Text>
            </View>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: Colors.backgroundColor, textAlign: 'center', width: '80%' }}>
                ₹ 23222
              </Text>
            </View>
            <View style={styles.icongreen}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: '#fff' }}>
                Paid
              </Text>
            </View>


          </View>
          <View style={{ marginTop: 5, width: '95%', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: '#999' }}>
                2
              </Text>
            </View>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: Colors.backgroundColor, textAlign: 'center', width: '80%' }}>
                4 May 2023
              </Text>
            </View>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: Colors.backgroundColor, textAlign: 'center', width: '80%' }}>
                ₹ 23522
              </Text>
            </View>
            <View style={styles.iconred}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: '#fff' }}>
                UnPaid
              </Text>
            </View>


          </View>
          <View style={{ marginTop: 5, width: '95%', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: '#999' }}>
                3
              </Text>
            </View>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: Colors.backgroundColor, textAlign: 'center', width: '80%' }}>
                15 May 2023
              </Text>
            </View>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: Colors.backgroundColor, textAlign: 'center', width: '80%' }}>
                ₹ 29522
              </Text>
            </View>
            <View style={styles.iconorange}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: '#fff' }}>
                Due
              </Text>
            </View>


          </View>
          <View style={{justifyContent:'center',alignItems:'center', backgroundColor: '#E2E2E2', marginTop: 5, width: '95%', alignSelf: 'center', flexDirection: 'row', height: responsiveWidth(12) }}>

          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: '#ffff' }}>
              Add Installment
            </Text>

          </View>
          </>:
          <FlatList
           data={['1','2','3','4']}
           
           renderItem={()=>
            <>
            <Text style={{fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.8), color: '#999' ,marginTop:12,marginLeft:6}}>
             Order Number - #ORD734662
           </Text>
            <View style={{ width: '95%', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row',marginTop:5 }}>
           <Text style={styles.ptext}>
             Installment no
           </Text>
           <Text style={styles.ptext}>
             Date
           </Text>
           <Text style={styles.ptext}>
             Amount
           </Text>
           <Text style={styles.ptext}>
             Status
           </Text>
         </View>
          <View style={{ width: '95%', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row',marginTop:5 }}>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: '#999' }}>
                1
              </Text>
            </View>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: Colors.backgroundColor, textAlign: 'center', width: '80%' }}>
                19 May 2024
              </Text>
            </View>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: Colors.backgroundColor, textAlign: 'center', width: '80%' }}>
                ₹ 23222
              </Text>
            </View>
            <View style={styles.icongreen}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: '#fff' }}>
                Paid
              </Text>
            </View>


          </View>
          <View style={{ marginTop: 5, width: '95%', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: '#999' }}>
                2
              </Text>
            </View>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: Colors.backgroundColor, textAlign: 'center', width: '80%' }}>
                4 May 2023
              </Text>
            </View>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: Colors.backgroundColor, textAlign: 'center', width: '80%' }}>
                ₹ 23522
              </Text>
            </View>
            <View style={styles.iconred}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: '#fff' }}>
                UnPaid
              </Text>
            </View>


          </View>
          <View style={{ marginTop: 5, width: '95%', alignSelf: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: '#999' }}>
                3
              </Text>
            </View>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: Colors.backgroundColor, textAlign: 'center', width: '80%' }}>
                15 May 2023
              </Text>
            </View>
            <View style={styles.icon}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: Colors.backgroundColor, textAlign: 'center', width: '80%' }}>
                ₹ 29522
              </Text>
            </View>
            <View style={styles.iconorange}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: '#fff' }}>
                Due
              </Text>
            </View>


          </View>
          <View style={{justifyContent:'center',alignItems:'center', backgroundColor: '#848484', marginTop: 5, width: '95%', alignSelf: 'center', flexDirection: 'row', height: responsiveWidth(12) }}>

          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: '#ffff' }}>
              Edit
            </Text>

          </View>
            </>
           }
          />
          
          }




        </View>



       {adata=='new' && <TouchableOpacity onPress={() => {}} style={{ marginTop: 20, borderRadius: 8, backgroundColor: '#3AC034', width: '60%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
          <Text style={{ fontFamily: Calibri.regular, color: Colors.white, paddingHorizontal: 16, paddingVertical: 6, fontSize: responsiveFontSize(2.8) }}>Submit</Text>
        </TouchableOpacity>}




      </ScrollView>


    </View>
  );
};


export default Payment;
