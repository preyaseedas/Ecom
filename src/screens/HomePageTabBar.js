import React from 'react';
import HomePage from './HomePage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, View} from 'react-native';
import MyCart from './MyCart';
import {Colors} from '../common/Colors';
import MyProfile from './MyProfile';
import {FAB} from 'react-native-paper';

const Tab = createBottomTabNavigator();

const HomePageTabBar = () => {
  const TabButton = selectedProps => {
    return (
      <View
        style={styles.buttonContain(
          selectedProps.isSelected ? Colors.light_green : '#FFFFFF',
        )}>
        <Image source={selectedProps.image} style={styles.focusedButton} />
      </View>
    );
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="homePage"
        component={HomePage}
        options={{
          tabBarStyle: styles.tabBar, // This is where you style the container
          tabBarItemStyle: {
            alignItems: 'center',
            flexDirection: 'row',
          },
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <TabButton
                isSelected={true}
                image={require('../assets/images/focusedHome.png')}
              />
            ) : (
              <TabButton
                isSelected={false}
                image={require('../assets/images/home.png')}
              />
            ),
        }}
      />

      <Tab.Screen
        name="myCart"
        component={MyCart}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar, // This is where you style the container
          tabBarItemStyle: {
            alignItems: 'center',
            flexDirection: 'row',
          },
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <TabButton
                isSelected={true}
                image={require('../assets/images/focusedCart.png')}
              />
            ) : (
              <TabButton
                isSelected={false}
                image={require('../assets/images/cart.png')}
              />
            ),
        }}
      />

      <Tab.Screen
        name="myProfile"
        component={MyProfile}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar, // This is where you style the container
          tabBarItemStyle: {
            alignItems: 'center',
            flexDirection: 'row',
          },
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <TabButton
                isSelected={true}
                image={require('../assets/images/focusedProfile.png')}
              />
            ) : (
              <TabButton
                isSelected={false}
                image={require('../assets/images/profile.png')}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomePageTabBar;

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonContain: color => ({
    backgroundColor: color || Colors.light_green,
    borderRadius: '50%',
    height: 65,
    width: 65,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  focusedButton: {
    width: 24,
    height: 24,
  },
  button: {
    height: 24,
    width: 24,
  },
});
