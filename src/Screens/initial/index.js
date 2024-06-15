//import liraries
import React, { useEffect } from 'react';
import { View, Image, Text, Platform, Alert, PermissionsAndroid} from 'react-native';
import Styles from './style';
import { Colors } from '../../Constants/Colors';
import { Images } from '../../Constants/ImageIconContant';


// create a component
const Initial = props => {
	const styles = Styles();

	useEffect(() => {
		
		setTimeout(() => {
						
						props.navigation.navigate('Login');
				
			}, 3000);	
	
	  }, []);
	
	return (
		<View style={styles.container}>
            <Image
			style={styles.splashLogo}
			source={Images.splash_logo}
		 />
			</View>
	);
};


//make this component available to the app
export default Initial;
