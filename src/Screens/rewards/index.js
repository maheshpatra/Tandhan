
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
// create a component
const Review = ({ props, route, navigation }) => {
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
    navigation.navigate('Review')
			}, 5000);	
	  }, [redeem]);
	
  const styles = Styles();
  const data = ['Cash-In', 'Offer & Schemes', 'Gifts & Prizes']
  const [adata, setAdata] = useState(null)
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 60, width: '91%', alignSelf: 'center', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', tintColor: Colors.backgroundColor }}>
          <Image resizeMode='stretch' source={require('../../assets/images/gift-box-benefits_15859114.png')} style={{ width: responsiveWidth(12), height: responsiveWidth(12), tintColor: Colors.backgroundColor }} />
          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(3.5), color: '#000', marginLeft: 15 }}>Rewards</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => toggleModal(item)} style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: '55%', alignSelf: 'center', height: responsiveWidth(18), marginTop: 15, borderColor: Colors.backgroundColor, justifyContent: 'center', elevation: 10, borderRadius: 12, marginLeft: 12, backgroundColor: item == adata ? Colors.backgroundColor : '#fff', marginBottom: 10 }}>
              <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.5), color: item == adata ? '#fff' : Colors.backgroundColor, marginLeft: 10 }}>{item}</Text>
            </TouchableOpacity>
          }
        />

        <View style={{ width: '90%', alignSelf: 'center', height: 30, justifyContent: 'space-between', flexDirection: 'row', marginVertical: 20 }}>
          <View>
            <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.5), color: Colors.backgroundColor }}>
              Total Point
            </Text>
            <Text style={{ fontFamily: Calibri.regular, fontSize: responsiveFontSize(2), color: Colors.backgroundColor }}>
              <AntDesign name='infocirlce' size={responsiveFontSize(2)} color={Colors.backgroundColor} /> Reward Chart
            </Text>
          </View>

          <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.5), color: '#66CE62' }}>
            147pts
          </Text>

        </View>



        <TouchableOpacity onPress={() => navigation.navigate('Brand')} style={{ marginTop: 15, borderRadius: 15, backgroundColor: '#848484', width: '90%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
          <Text style={{ fontFamily: Calibri.bold, color: Colors.white, paddingHorizontal: 18, paddingVertical: 10, fontSize: responsiveFontSize(2.8) }}>Claim</Text>
        </TouchableOpacity>

        <View style={{ width: '90%', alignSelf: 'center' }}>
          <Text style={{ fontStyle: 'italic', fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#555' }}>
            Note
          </Text>
          <Text style={{ fontStyle: 'italic', fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#555' }}>
            - You can cash-in your reward points.
          </Text>
          <Text style={{ fontStyle: 'italic', fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#555' }}>
            - You can upgrade your tier to higher version.
          </Text>
          <Text style={{ fontStyle: 'italic', fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#555' }}>
            - You can avail extra offers and schemes through reward point.
          </Text>
          <Text style={{ fontStyle: 'italic', fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#555' }}>
            - You can buy gift from our selected items via Reward points.
          </Text>
        </View>


      </ScrollView>

      <Modal isVisible={isModalVisible}>
        {!redeem ?<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {modaltype == 'Cash-In' ? <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 10 }}>
            <Text style={{ alignSelf: 'center', fontFamily: Calibri.bold, fontSize: responsiveFontSize(4), color: Colors.backgroundColor, marginTop: 10 }}>{modaltype}</Text>
            <Text style={{ fontStyle: 'italic', alignSelf: 'center', fontFamily: Calibri.regular, fontSize: responsiveFontSize(2), color: Colors.backgroundColor }}>100 Pts equals ₹50</Text>
            <Text style={{ alignSelf: 'center', fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.3), color: Colors.backgroundColor, marginTop: 15 }}>Redeem Towards Distributor XYZ</Text>

            <View style={{ width: '90%', height: 45, borderRadius: 10, borderWidth: 1, borderColor: '#ccc', alignSelf: 'center', marginTop: responsiveWidth(6), }}>
              <TextInput
                numberOfLines={1}
                style={{ paddingLeft: 10, width: '100%', height: '100%' }}
                placeholder='How many points do you want to redeem?'
              />
            </View>
            <Text style={{ fontStyle: 'italic', fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.5), color: '#555', marginBottom: responsiveWidth(6), alignSelf: "center" }}>
              - You can only redeem in multiple of 1000's.
            </Text>

            <Text style={{ fontStyle: 'italic', alignSelf: 'center', fontFamily: Calibri.regular, fontSize: responsiveFontSize(2), color: Colors.backgroundColor }}>Your points - 1022 pts</Text>
            <TouchableOpacity onPress={close} style={{ borderRadius: 8, backgroundColor: '#3AC034', width: '90%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
              <Text style={{ fontFamily: Calibri.bold, color: 'black', color: '#FFF', paddingHorizontal: 15, paddingVertical: 5, fontSize: responsiveFontSize(2.8) }}>Redeem</Text>

            </TouchableOpacity>
          </View> :
            modaltype == 'Offer & Schemes' ?
              <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 10 }}>
                <Text style={{ alignSelf: 'center', fontFamily: Calibri.bold, fontSize: responsiveFontSize(4), color: Colors.backgroundColor, marginTop: 10 }}>{modaltype}</Text>
                <Text style={{ fontStyle: 'italic', alignSelf: 'center', fontFamily: Calibri.regular, fontSize: responsiveFontSize(2), color: Colors.backgroundColor, width: '80%', textAlign: 'center',marginBottom:5 }}>Avail new offers & schemes for extra benefit</Text>
                <FlatList
                  data={offers}
                  horizontal
                  showsHorizontalScrollIndicator={false}

                  renderItem={({item}) =>
                    <View style={{ height: responsiveWidth(50), width: responsiveWidth(62),borderRadius:10,backgroundColor:'#fff', elevation: 6, marginLeft: 20,justifyContent:'center',alignItems:'center' ,marginVertical:5}}>
                      
                     <Text style={{ alignSelf: 'center', fontFamily: Calibri.bold, fontSize: responsiveFontSize(3), color: '#3AC034', marginTop: 10 }}>Win a trip to</Text>
                     <Text style={{ alignSelf: 'center', fontFamily: Calibri.bold, fontSize: responsiveFontSize(4), color: '#3AC034',  }}>{item}</Text>
                     <Text style={{ alignSelf: 'center', fontFamily: Calibri.bold, fontSize: responsiveFontSize(3), color: '#3AC034', }}>with 20000 pts</Text>
                
                    </View>
                  }
                />

                <Text style={{ fontStyle: 'italic', alignSelf: 'center', fontFamily: Calibri.regular, fontSize: responsiveFontSize(2), color: Colors.backgroundColor,marginTop:10 }}>Your points - 1022 pts</Text>
                <TouchableOpacity onPress={close} style={{ borderRadius: 8, backgroundColor: '#3AC034', width: '90%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                  <Text style={{ fontFamily: Calibri.bold, color: 'black', color: '#FFF', paddingHorizontal: 15, paddingVertical: 5, fontSize: responsiveFontSize(2.8) }}>Redeem</Text>

                </TouchableOpacity>
              </View> :
              <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 10 }}>
                <Text style={{ alignSelf: 'center', fontFamily: Calibri.bold, fontSize: responsiveFontSize(4), color: Colors.backgroundColor, marginTop: 10 }}>{modaltype}</Text>
                <Text style={{ fontStyle: 'italic', alignSelf: 'center', fontFamily: Calibri.regular, fontSize: responsiveFontSize(2), color: Colors.backgroundColor,marginBottom:15 }}>Redeem points to selected gift</Text>
                

                <FlatList
                  data={prize}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  
                  renderItem={({item}) =>
                    <View style={{ height: responsiveWidth(50), width: responsiveWidth(65),borderRadius:10,backgroundColor:'#fff', elevation: 6, marginLeft: 20,justifyContent:'center',alignItems:'center' ,marginVertical:5}}>
                      
                     <Image source={item} style={{height:responsiveWidth(30),width:responsiveWidth(30)}} />
                     <Text style={{ alignSelf: 'center', fontFamily: Calibri.bold, fontSize: responsiveFontSize(3), color: '#848484', }}> 1,50,000 pts</Text>
                    </View>
                  }
                />
               

                <Text style={{ fontStyle: 'italic', alignSelf: 'center', fontFamily: Calibri.regular, fontSize: responsiveFontSize(2), color: Colors.backgroundColor,marginTop:21 }}>Your points - 1022 pts</Text>
                <TouchableOpacity onPress={close} style={{ borderRadius: 8, backgroundColor: '#3AC034', width: '90%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                  <Text style={{ fontFamily: Calibri.bold, color: 'black', color: '#FFF', paddingHorizontal: 15, paddingVertical: 5, fontSize: responsiveFontSize(2.8) }}>Redeem</Text>

                </TouchableOpacity>
              </View>
          }

        </View>:
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 10,height:responsiveHeight(50),justifyContent:'center',alignItems:'center' }}>
          <Image source={require('../../assets/images/checkbox.png')} style={{height:responsiveWidth(25),width:responsiveWidth(25),tintColor:'#3AC034'}} />
          <Text style={{ alignSelf: 'center', fontFamily: Calibri.bold, fontSize: responsiveFontSize(3), color: '#848484', }}> Sucessfully Redeem</Text>
          </View>
        </View>
        }
      </Modal>
    </View>
  );
};


export default Review;
