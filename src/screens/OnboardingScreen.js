import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
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
      <View style={{marginBottom: 40, padding: 20}}>
        <View style={styles.container}>
          <Image
            style={styles.logoStyle}
            source={require('../assets/images/logo.png')}
          />

          <Text style={styles.welcomeText}>{CommonText.welcomeText}</Text>

          <Text style={styles.texts}>
            Ger your groceries in as fast as one hour
          </Text>
        </View>
        <CustomButton
          title={'Get Started'}
          buttonStyle={{}}
          onButtonPress={() => {
            navigation.replace('selectLocation');
          }}
        />
      </View>
    </ImageBackground>
  );
};
export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,

    alignItems: 'center',
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
