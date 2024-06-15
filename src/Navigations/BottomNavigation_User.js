import React,{ useEffect, useState} from "react";
import { StyleSheet, Text, View, Image, Dimensions, Pressable} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator, CardStyleInterpolators} from '@react-navigation/native-stack';
import {
    FAQs,
    Home, OrderSummary, Profile,
    Tmwallet,
} from "../Screens";
import { Icons, Images } from '../Constants/ImageIconContant';
import { Calibri } from '../Constants/Fonts';
import{ Colors} from '../Constants/Colors'
import { Icon } from 'react-native-basic-elements';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
const Bottom = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CollegeStack = createNativeStackNavigator();
import {NavigationContainer} from '@react-navigation/native';



const BottomNavigation_User = (props) => {

  //initialRouteName="Home"
  const activeheight = responsiveHeight(10);
  return (
    <Bottom.Navigator  initialRouteName="Home" screenOptions={{
        headerShown: false,
        "tabBarHideOnKeyboard": true,
        tabBarActiveTintColor: Colors.secondary,
        tabBarShowLabel: false,
        headerShadowVisible: false,
        
        tabBarStyle: {
           backgroundColor:Colors.backgroundColor,
           height:60
        },
    
        
      }}>
     
      {/* == For showing Tabs under sidemenu == */}
      
            <Bottom.Screen 
                        name="Faq"
                        component={FAQs}
                        options={{
                            headerLeft: () => (
                                <Pressable style={{marginHorizontal: 10}} onPress={() => props.navigation.openDrawer()}>
                                    <Icon  name='menu'  type='Entypo'  color={Colors.white}  size={25} style={{}} />
                                </Pressable>
                            ),
                            tabBarLabel: 'FAQ',
                            tabBarIcon: ({ color, size,focused }) => {
                                return (
                                focused?
                                <View style={{width:'100%',height:activeheight,backgroundColor:'#fff',elevation:18,borderTopRightRadius:10,borderTopLeftRadius:10,justifyContent:'center',alignItems:'center',position:"absolute",bottom:0}}>
                                     <Image source={require('../assets/images/headphoneactive.png')} style={{height:responsiveFontSize(5),width:responsiveFontSize(5)}} />
                                </View>:
                               <Image resizeMode="stretch" source={require('../assets/images/headset.png')} style={{height:responsiveFontSize(3.2),width:responsiveFontSize(3.6)}} />
                            
                               )
                            },
                            tabBarLabelStyle: {fontFamily: Calibri.regular, fontSize: responsiveFontSize(1.5),fontWeight: 'bold'},
                        }}
                    />
                    <Bottom.Screen 
                        name="Tmwallet"
                        component={Tmwallet}
                        options={{
                            
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color, size,focused }) => {
                                return (
                                focused?
                                <View style={{width:'100%',height:activeheight,backgroundColor:'#fff',elevation:18,borderTopRightRadius:10,borderTopLeftRadius:10,justifyContent:'center',alignItems:'center',position:"absolute",bottom:0}}>
                                     <Image source={require('../assets/images/walletactive.png')} style={{height:responsiveFontSize(5),width:responsiveFontSize(5)}} />
                                </View>:
                               <Image resizeMode="stretch" source={require('../assets/images/wallet.png')} style={{height:responsiveFontSize(3.5),width:responsiveFontSize(3)}} />
                            
                               )
                            },
                            tabBarLabelStyle: {fontFamily: Calibri.regular,fontSize: responsiveFontSize(1.5),fontWeight: 'bold'},
                        }}
                    />
                    <Bottom.Screen 
                name="Home"
                component={Home}
                options={{
                          
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size,focused }) => {
                                return (
                                focused?
                                <View style={{width:'100%',height:activeheight,backgroundColor:'#fff',elevation:18,borderTopRightRadius:10,borderTopLeftRadius:10,justifyContent:'center',alignItems:'center',position:"absolute",bottom:0}}>
                                     <Image source={require('../assets/images/homeactive.png')} style={{height:responsiveFontSize(5),width:responsiveFontSize(5)}} />
                                </View>:
                               <Image resizeMode="stretch" source={require('../assets/images/home.png')} style={{height:responsiveFontSize(3.5),width:responsiveFontSize(3.2)}} />
                            
                               )
                            },
                            tabBarLabelStyle: {
                                fontFamily: Calibri.regular,
                                fontSize: responsiveFontSize(1.5),
                                fontWeight: 'bold'
                            },
                       }}
            />
            <Bottom.Screen 
                name="OrderSummary"
                component={OrderSummary}
                options={{
                            
                            tabBarLabel: 'Order Summery',
                            tabBarIcon: ({ color, size,focused }) => {
                                return (
                                focused?
                                <View style={{width:'100%',height:activeheight,backgroundColor:'#fff',elevation:18,borderTopRightRadius:10,borderTopLeftRadius:10,justifyContent:'center',alignItems:'center',position:"absolute",bottom:0}}>
                                     <Image source={require('../assets/images/shoppingactive.png')} style={{height:responsiveFontSize(5),width:responsiveFontSize(4.8)}} />
                                </View>:
                               <Image resizeMode="stretch" source={require('../assets/images/shopping.png')} style={{height:responsiveFontSize(3.8),width:responsiveFontSize(3.8)}} />
                            
                               )
                            },
                            tabBarLabelStyle: {
                                fontFamily: Calibri.regular,
                                fontSize: responsiveFontSize(1.5),
                                fontWeight: 'bold'
                            },
                       }}
            />
              <Bottom.Screen 
                        name="Profile"
                        component={Profile}
                        options={{
                            headerLeft: () => (
                                <Pressable style={{marginHorizontal: 10}} onPress={() => props.navigation.openDrawer()}>
                                    <Icon  name='menu'  type='Entypo' color={Colors.white} size={25} style={{}} />
                                </Pressable>
                            ),
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color, size,focused }) => {
                                return (
                                focused?
                                <View style={{width:'100%',height:activeheight,backgroundColor:'#fff',elevation:18,borderTopRightRadius:10,borderTopLeftRadius:10,justifyContent:'center',alignItems:'center',position:"absolute",bottom:0}}>
                                     <Image source={require('../assets/images/picpeople.png')} style={{height:responsiveFontSize(4),width:responsiveFontSize(5)}} />
                                </View>:
                               <Image resizeMode="stretch" source={require('../assets/images/picpeoplee.png')} style={{height:responsiveFontSize(3.2),width:responsiveFontSize(3.8)}} />
                            
                               )
                            },
                            tabBarLabelStyle: {fontFamily: Calibri.regular,fontSize: responsiveFontSize(1.5),fontWeight: 'bold'},
                        }}
                    />

    </Bottom.Navigator>
  );
};
export {BottomNavigation_User};
