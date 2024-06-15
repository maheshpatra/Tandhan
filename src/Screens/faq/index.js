// HelpScreen.js

import React, { useState } from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
import { Calibri } from '../../Constants/Fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { Colors } from '../../Constants/Colors';
const FAQs = ({navigation}) => {

  const [faqItems, setFaqItems] = useState([
    { question: 'How do I reset my password?', answer: 'Navigate to the profile screen and find the "Reset Password" option.' },
    { question: 'How can I contact support?', answer: 'You can contact our support team at support@example.com.' },
    { question: 'How can I contact support?', answer: 'You can contact our support team at support@example.com.' },
    { question: 'How can I contact support?', answer: 'You can contact our support team at support@example.com.' },
    { question: 'How can I contact support?', answer: 'You can contact our support team at support@example.com.' },
    // Add more FAQ items as needed
  ]);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFaqItem = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const orders = [
    {
      name: 'Balaji Ltd',
      image: require('../../assets/images/ecopaulin-star-big-image.png'),
      status: 'Delivered',
      orderId: '#ORD92836',
      que: 2
    },
    {
      name: 'Maithhan Steel',
      image: require('../../assets/images/shadenet.65d7cbf3.png'),
      status: 'Out for Delivery',
      orderId: '#ORD9245',
      que: 5
    }
  ]

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', backgroundColor: '#E2E2E2', height: 80, flexDirection: 'row', alignItems: "center" }}>
       <View style={{marginLeft:responsiveWidth(3)}}>
        <Text style={{fontSize:responsiveFontSize(2.2),fontFamily:Calibri.bold,color:Colors.backgroundColor}}>GET QUICK CUSTOMER SUPPORT
        </Text>
        <Text style={{fontSize:responsiveFontSize(2.2),fontFamily:Calibri.regular,color:'#555'}}>Toll Free Number 1800 5566</Text>
        </View>
        <Image resizeMode='cover' source={require('../../assets/images/customer.png')} style={{ width: responsiveWidth(17), height: responsiveWidth(18), position: 'absolute', right: 15 }} />

      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={{fontSize:responsiveFontSize(3.5),fontFamily:Calibri.bold,color:Colors.backgroundColor,marginLeft:responsiveWidth(2.5),marginTop:responsiveWidth(2.5)}}>TRACK YOUR ORDER
      </Text>

        <FlatList
          data={orders}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={()=>navigation.navigate('OrderDetails')} style={{ width: '93%', height: responsiveWidth(29), backgroundColor: '#E2E2E2', borderRadius: 16, alignSelf: 'center', marginTop: 25, flexDirection: 'row', alignItems: 'center' }}>
          <Image resizeMode='cover' source={item.image} style={{ width: responsiveWidth(35), height: responsiveWidth(33), marginLeft: -10 }} />
          <View style={{marginLeft:10}}>
            <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2.4), color: Colors.backgroundColor }}>{item.name}</Text>
            <Text style={{ fontFamily: Calibri.regular, fontSize: responsiveFontSize(1.8), color: Colors.backgroundColor }}>{item.orderId}</Text>
            <Text style={{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(2), color: item.status == 'Delivered' ? 'green' : 'orange',marginBottom:5 }}>{item.status}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center',width:'83%',marginBottom:0  }}>
              <TouchableOpacity onPress={() => navigation.navigate('Brand')} style={{ borderRadius: 15, backgroundColor: '#fff', width: '50%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontFamily: Calibri.regular, color: 'black', color: Colors.backgroundColor, fontSize: responsiveFontSize(1.6),paddingVertical:2 }}>Download Invoice</Text>

              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Brand')} style={{marginLeft:10, borderRadius: 15, backgroundColor: '#fff', width: '38%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center',  }}>
              <Text style={{ fontFamily: Calibri.regular, color: 'black', color: Colors.backgroundColor, fontSize: responsiveFontSize(1.6), paddingVertical:2}}>Order Again</Text>

              </TouchableOpacity>
            </View>
            <View style={{backgroundColor:Colors.backgroundColor,height:30,width:30,borderRadius:8,position:'absolute',top:0,right:'42%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{ fontFamily: Calibri.bold, color: '#fff',  fontSize: responsiveFontSize(2), }}>{item.que}</Text>

              </View>
              <View style={{backgroundColor:Colors.backgroundColor,height:30,width:48,borderRadius:8,position:'absolute',top:0,right:'22%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{ fontFamily: Calibri.bold, color: '#fff',  fontSize: responsiveFontSize(2), }}>Piecs</Text>

              </View>

          </View>
        </TouchableOpacity>
          }

        />

        <View style={{backgroundColor:'#848484',width:'90%',height:responsiveWidth(24),alignSelf:'center',marginVertical:20,borderRadius:12,justifyContent:'center',alignItems:'center'}}> 
        <Text style={{fontSize:responsiveFontSize(2.5),fontFamily:Calibri.bold,color:'#fff'}}>Raise A Ticket
        </Text>
        <Text style={{fontSize:responsiveFontSize(2.2),fontFamily:Calibri.bold,color:'#fff',textAlign:'center',fontFamily:Calibri.regular,width:'70%'}}>For any kind complaint or error please raise a ticket
        </Text>
        </View>

<Text style={{fontSize:responsiveFontSize(3),fontFamily:Calibri.bold,color:Colors.backgroundColor,marginLeft:responsiveWidth(2.5),marginTop:responsiveWidth(2.5)}}>WHAT ISSUE ARE YOU FACING ?
      </Text>
        {faqItems.map((faq, index) => (
          <TouchableOpacity key={index} onPress={() => toggleFaqItem(index)}>
            <View style={styles.faqItem}>
              <Text style={styles.faqQuestion}>{faq.question}</Text>
              <MaterialIcons name='keyboard-arrow-down' size={20} style={{ position: 'absolute', right: 10, marginTop: 15 }} />
              {expandedIndex === index && <Text style={styles.faqAnswer}>{faq.answer}</Text>}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>

    //  <SkeletonPlaceholder >
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={80} alignSelf='center' borderRadius={10} marginTop={30} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={50} alignSelf='center' marginTop={15} borderRadius={10} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={50} alignSelf='center' marginTop={15} borderRadius={10} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={50} alignSelf='center' marginTop={15} borderRadius={10} />
    //    <SkeletonPlaceholder.Item width={ responsiveWidth(92)} height={50} alignSelf='center' marginTop={15} borderRadius={10} />


    // </SkeletonPlaceholder>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

  },
  scrollContainer: {
    flexGrow: 1,
    padding: 5
  },
  title: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    fontFamily: Calibri.bold,
    marginBottom: 16,
    marginLeft: 15
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
  },
  faqItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  faqQuestion: {
    fontSize: 18,
    fontFamily: Calibri.bold,
    color: '#000'
  },
  faqAnswer: {
    fontSize: responsiveFontSize(2),
    marginTop: 8,
    fontFamily: Calibri.regular,
    color: '#555'
  },
});

export default FAQs;
