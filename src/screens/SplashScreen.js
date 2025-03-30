import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('start');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoStyle}
        source={require('../assets/images/logo.png')}
      />
      <Text style={styles.name}>D,Grosse</Text>
      <Text style={styles.about}>DAILY NEED DELIVERED</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48BF40',
    alignItems: 'center',

    display: 'flex',

    justifyContent: 'center',
  },
  logoStyle: {
    width: 78,
    height: 88,
    alignItems: 'center',
    alignContent: 'center',
  },
  name: {
    color: 'white',
    fontSize: 42,
    fontWeight: 800,
  },
  about: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
