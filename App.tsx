import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import SelectLocation from './src/screens/SelectLocation';

import HomePage from './src/screens/HomePage';
import OrderSuccessful from './src/screens/OrderSuccessful';
import EditProfile from './src/screens/EditProfile';

import NoodlesCategory from './src/screens/NoodlesCategory';
import BeveragesCategory from './src/screens/BeveragesCategory';
import Filter from './src/screens/Filter';

import TermCondition from './src/screens/TeamCondition';
import AddPhoneNo from './src/screens/AddPhoneNo';
import {PaperProvider} from 'react-native-paper';
import LoginScreen from './src/screens/LoginScreen';

import HomePageTabBar from './src/screens/HomePageTabBar';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="homePage" component={HomePageTabBar} />

          <Stack.Screen name="splash" component={SplashScreen} />
          <Stack.Screen name="start" component={OnboardingScreen} />
          <Stack.Screen name="selectLocation" component={SelectLocation} />

          <Stack.Screen name="Edit Profile" component={EditProfile} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="addPhone" component={AddPhoneNo} />

          <Stack.Screen name="Terms and conditions" component={TermCondition} />

          <Stack.Screen name="Beverages" component={BeveragesCategory} />

          <Stack.Screen name="success" component={OrderSuccessful} />

          <Stack.Screen name="Snacks" component={NoodlesCategory} />
          <Stack.Screen name="filter" component={Filter} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
