
import { StyleSheet } from 'react-native';
import{ Colors} from '../../Constants/Colors'
import { Calibri } from '../../Constants/Fonts';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from "react-native-responsive-dimensions";
const Styles = () => {
    return StyleSheet.create({
        container: {flex: 1, backgroundColor: Colors.backgroundColor},
        sliderContainer: {
            height: responsiveHeight(30),
            width: responsiveWidth(100),
            paddingTop: responsiveHeight(2),
            paddingBottom: responsiveHeight(2),
            paddingHorizontal: responsiveWidth(4),
            overflow:"hidden",
            borderRadius: 10, 
          },
          scointainer:{
            width:'100%',borderRadius:16,borderRadius:10,marginTop:10,backgroundColor:'#E2E2E2',alignSelf:'center',marginBottom:10
          },
          icon:{height:responsiveWidth(12),width:'24%',justifyContent:'center',alignItems:'center',backgroundColor:'#E2E2E2'},
          icongreen:{height:responsiveWidth(12),width:'24%',justifyContent:'center',alignItems:'center',backgroundColor:'#3AC034'},
          iconorange:{height:responsiveWidth(12),width:'24%',justifyContent:'center',alignItems:'center',backgroundColor:'#FCA802'},
          iconred:{height:responsiveWidth(12),width:'24%',justifyContent:'center',alignItems:'center',backgroundColor:'#ED1C24'},
          ptext:{ fontFamily: Calibri.bold, fontSize: responsiveFontSize(1.7), color: '#999' ,}
    });
  };
  export default Styles;
