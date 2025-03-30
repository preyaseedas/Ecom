import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomButton, {ButtonStyle} from '../common/CustomButton';
import {CommonText} from '../common/CommonText';
import {useNavigation} from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={{
        flex: 1,

        justifyContent: 'flex-end',
      }}
      source={require('../assets/images/backgroundImage.png')}>
      <View style={styles.container}>
        <Image
          style={styles.logoStyle}
          source={require('../assets/images/logo.png')}
        />

        <Text style={styles.welcomeText}>{CommonText.welcomeText}</Text>

        <Text style={styles.texts}>
          Ger your groceries in as fast as one hour
        </Text>

        <CustomButton
          title={'Get Started'}
          onButtonPress={() => {
            navigation.navigate('selectLocation');
          }}
        />
      </View>
    </ImageBackground>
  );
};
export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    width: 430,
    height: 430,

    alignItems: 'center',
    display: 'flex',
  },
  logoStyle: {
    width: 78,
    height: 88,
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 25,
  },

  welcomeText: {
    fontSize: 48,
    width: 250,
    color: 'white',

    textAlign: 'center',
  },
  texts: {
    color: '#FCFCFCB2',
    fontSize: 18,
  },
});
