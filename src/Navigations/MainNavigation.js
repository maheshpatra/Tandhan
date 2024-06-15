import React from "react";
import {
  createNativeStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/native-stack';
import { Pressable } from "react-native";
import {
  CreateAccount,
  Initial,
  Login,
  Main,
  Otp,
  Signup,
  Confirm,
  SignupManually,
  Rewards,
  AddCustomer,
  ProfileDetails,
  Review,
  OrderDetails,
  AllCategory,
  Addtocart,
  Invoice,
  Qrcode,
  Ticket,
  Payment,
} from "../Screens";

import { Icon } from 'react-native-basic-elements';
import { Colors } from "../Constants/Colors";
const Stack = createNativeStackNavigator();

const MainNavigation = (props) => {

  const horizontalAnimation = {
    gestureDirection: "horizontal",
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };

  const verticalAnimation = {
    gestureDirection: "vertical",
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateY: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.height, 0],
              }),
            },
          ],
        },
      };
    },
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerShadowVisible: false,
      }}
    >

     <Stack.Screen
        name="Initial"
        component={Initial}
        options={horizontalAnimation}
      /> 
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerTitle: 'Login', }}
      />
      
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerTitle: 'Signup', }}
      /> 
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{headerTitle: 'Enter Otp', headerShown: true}}
      />  
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{headerTitle: 'Create Account', headerShown: true}}
      /> 
      
      
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        // options={{headerTitle: 'Upload Details', headerShown: true}}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={horizontalAnimation}
      />
      <Stack.Screen
        name="SignupManually"
        component={SignupManually}
        options={horizontalAnimation}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={horizontalAnimation}
      />
      <Stack.Screen
        name="Ticket"
        component={Ticket}
        options={{ headerShown: true,title:''}}
      />
      <Stack.Screen
        name="Rewards"
        component={Rewards}
        options={{ headerShown: true,
          title:'',
          headerRight: () => (
            <Pressable style={{marginHorizontal: 10}} onPress={() => {}}>
                <Icon  name='bell'  type='Fontisto' color={Colors.backgroundColor} size={25} style={{}} />
            </Pressable>
        ),
        }}
      />
      <Stack.Screen
        name="AddCustomer"
        component={AddCustomer}
        options={{ headerShown: true,
          title:'',
          headerRight: () => (
            <Pressable style={{marginHorizontal: 10}} onPress={() => {}}>
                <Icon  name='bell'  type='Fontisto' color={Colors.backgroundColor} size={25} style={{}} />
            </Pressable>
        ),
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: true,
          title:'',
          headerRight: () => (
            <Pressable style={{marginHorizontal: 10}} onPress={() => {}}>
                <Icon  name='bell'  type='Fontisto' color={Colors.backgroundColor} size={25} style={{}} />
            </Pressable>
        ),
        }}
      />
      <Stack.Screen
        name="ProfileDetails"
        component={ProfileDetails}
        options={{ headerShown: true,
          title:'',
          headerRight: () => (
            <Pressable style={{marginHorizontal: 10}} onPress={() => {}}>
                <Icon  name='bell'  type='Fontisto' color={Colors.backgroundColor} size={25} style={{}} />
            </Pressable>
        ),
        }}
      />
      <Stack.Screen
        name="Review"
        component={Review}
        options={{ headerShown: true,
          title:'',
          headerRight: () => (
            <Pressable style={{marginHorizontal: 10}} onPress={() => {}}>
                <Icon  name='bell'  type='Fontisto' color={Colors.backgroundColor} size={25} style={{}} />
            </Pressable>
        ),
        }}
      />
      <Stack.Screen
        name="AllCategory"
        component={AllCategory}
        options={{ headerShown: true,
          title:'',
          headerRight: () => (
            <Pressable style={{marginHorizontal: 10}} onPress={() => {}}>
                <Icon  name='bell'  type='Fontisto' color={Colors.backgroundColor} size={25} style={{}} />
            </Pressable>
        ),
        }}
      />
      <Stack.Screen
        name="Addtocart"
        component={Addtocart}
        options={{ headerShown: true,
          title:'',
          headerRight: () => (
            <Pressable style={{marginHorizontal: 10}} onPress={() => {}}>
                <Icon  name='bell'  type='Fontisto' color={Colors.backgroundColor} size={25} style={{}} />
            </Pressable>
        ),
        }}
      />
      <Stack.Screen
      name="Invoice"
      component={Invoice}
      options={{ headerShown: true,
        title:'',
        headerRight: () => (
          <Pressable style={{marginHorizontal: 10}} onPress={() => {}}>
              <Icon  name='bell'  type='Fontisto' color={Colors.backgroundColor} size={25} style={{}} />
          </Pressable>
      ),
      }}
    />
      <Stack.Screen
      name="Qrcode"
      component={Qrcode}
      options={{ headerShown: true,
        title:'',
        headerRight: () => (
          <Pressable style={{marginHorizontal: 10}} onPress={() => {}}>
              <Icon  name='bell'  type='Fontisto' color={Colors.backgroundColor} size={25} style={{}} />
          </Pressable>
      ),
      }}
    />
     
    </Stack.Navigator>
  );
};

// export default MainNavigation;
export { MainNavigation };
