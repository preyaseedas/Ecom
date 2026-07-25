import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import SelectLocation from './src/screens/SelectLocation';
import OrderSuccessful from './src/screens/OrderSuccessful';
import EditProfile from './src/screens/EditProfile';

import NoodlesCategory from './src/screens/NoodlesCategory';
import BeveragesCategory from './src/screens/BeveragesCategory';
import Filter from './src/screens/Filter';

import TermCondition from './src/screens/TeamCondition';
// import {PaperProvider, Provider} from 'react-native-paper';
//import LoginScreen from './src/screens/LoginScreen';

import HomePageTabBar from './src/screens/HomePageTabBar';
import ProductDetails from './src/screens/ProductDetails';
import GenerateOTP from './src/screens/GenerateOTP';
import HomePage from './src/screens/HomePage';
import SignUp from './src/screens/SignUp';
//import ForgetPassword from './src/screens/ForgetPassword';

//New
import store from './src/Redux/Store';
import {Provider} from 'react-redux';
import SignUpScreen from './src/screens/NewAuthScreens/SignUpScreen';
import LoginScreen from './src/screens/NewAuthScreens/LoginScreen';
import ForgetPassword from './src/screens/NewAuthScreens/ForgetPassword';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* -------------New UI---------------- */}

          {/* Authentication */}
          {/*  */}

          <Stack.Screen name="LoginScreen" component={LoginScreen} />

          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          {/*------------- old UI----------------- */}

          {/* <Stack.Screen name="MyOrder" component={MyOrder} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />   
        <Stack.Screen name="addPhone" component={AddPhoneNo} /> */}
          {/* <Stack.Screen name="Sign Up" component={SignUp} /> */}
          {/* <Stack.Screen name="login" component={LoginScreen} /> */}

          <Stack.Screen name="GenerateOTP" component={GenerateOTP} />
          <Stack.Screen name="splash" component={SplashScreen} />
          <Stack.Screen name="start" component={OnboardingScreen} />
          <Stack.Screen name="selectLocation" component={SelectLocation} />
          <Stack.Screen name="homePage" component={HomePageTabBar} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          {/* <Stack.Screen name="ForgetPassword" component={ForgetPassword} /> */}
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Edit Profile" component={EditProfile} />
          <Stack.Screen name="Terms and conditions" component={TermCondition} />
          <Stack.Screen name="Beverages" component={BeveragesCategory} />
          <Stack.Screen name="success" component={OrderSuccessful} />
          <Stack.Screen name="Snacks" component={NoodlesCategory} />
          <Stack.Screen name="filter" component={Filter} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
