//import liraries
import React, { useEffect } from 'react';
import { View, Image, Text, Platform, Alert, PermissionsAndroid, StatusBar} from 'react-native';
import Styles from './style';
import { Colors } from '../../Constants/Colors';


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
			<StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
            <Image
			style={styles.splashLogo}
			source={require('../../assets/images/app-logo.png')}
		 />
			</View>
	);
};


//make this component available to the app
export default Initial;
