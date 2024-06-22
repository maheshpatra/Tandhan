//import liraries
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Colors } from '../../Constants/Colors';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";

// create a component
const Styles = () => {
    return StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center', 
          justifyContent: 'center', 
          height:responsiveWidth(100),
           width: responsiveWidth(100),
            backgroundColor: '#fff'
          },
          splashLogo: {
            height: responsiveWidth(40), width: responsiveWidth(40)
          },
    });
};
export default Styles;