// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import {Colors} from '../../Constants/Colors';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
import { Calibri } from '../../Constants/Fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        rowGap: 16,
        padding: 16,
      },
      social: {
        borderRadius: 20,
        size: 30,
        padding: 5,
        margin: 8,
        alignSelf: "center",
      },
      inputContainer: {
        backgroundColor: "white",
        borderRadius: 5,
        
        height: responsiveWidth(12.5),
        
        flexDirection: "row",
        alignItems: "center",
        fontFamily:Calibri.regular
        
      },
      inputIcon: {
        marginRight: 20,
      },
      inputfild: {
        paddingLeft: 16,
        height: 50,
        color:'#555',
        width: "80%",
        fontFamily:'Nunito-Medium'

      },
      inputfildLabel: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: "bold",
      },
      submitbtn:{
        
          height: responsiveWidth(12),
          width: "100%",
          backgroundColor: Colors.primary,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 10,
          borderRadius: 5,
        
      },
      submittxt:{
         fontSize: 17, color: "#fff", fontFamily: Calibri.bold
      }
});

export default styles;
