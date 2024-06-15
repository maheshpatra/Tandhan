// LoginFormStyles.js

import { StyleSheet } from 'react-native';
import { Colors } from '../../Constants/Colors';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
import { Calibri } from '../../Constants/Fonts';
const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor:'#262727'
      },
      social: {
        borderRadius: 20,
        size: 30,
        padding: 5,
        margin: 8,
        alignSelf: "center",
      },
      inputContainer: {
        backgroundColor: "#E2E2E2",
        borderRadius: 20,
        borderWidth: 1,
        height: responsiveWidth(11.5),
        borderColor: '#ccc',
        flexDirection: "row",
        alignItems: "center",
        width:'70%',
        alignSelf:'center',
        marginTop:10
        
      },
      inputIcon: {
        marginRight: 20,
      },
      inputfild: {
        height: responsiveHeight(6.5),
        borderColor: "#ccc",
        width: "100%",
        color:'#555',
        fontFamily:Calibri.regular,
        fontSize:responsiveFontSize(3),
        textAlign:'center'
      },
      inputfildLabel: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: "bold",
      },
      button:{
        height: responsiveWidth(12),
        width: "70%",
        backgroundColor: '#7b7b7b',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: responsiveWidth(6),
        borderRadius: 20,
      }
});

export default styles;
