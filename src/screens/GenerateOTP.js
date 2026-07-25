import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {Image, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import PreviewButton from '../common/PreviewButton';
import {Colors} from '../common/Colors';
import {useSelector} from 'react-redux';

const GenerateOTP = () => {
  const [text, setText] = React.useState('');
  const navigation = useNavigation();
  const phoneNo = useSelector(
    state => state.authReducer.signUpData.result.phoneNumber,
  );

  const handleOTPVerification = async () => {
    console.log('Start Api call');

    const data = {
      phoneNumber: phoneNo,
      otp: text,
    };

    console.log('data', data);
    const response = await fetch('http://localhost:3000/api/auth/verify-otp', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    console.log('resp', responseData);

    if (responseData.error === false) {
      //otp successfull
      console.log(responseData.message);
    } else {
      console.log(responseData.message);
    }
  };

  return (
    <View style={{flex: 1, padding: 20}}>
      <PreviewButton onButtonPress={() => navigation.goBack()} />
      <Text style={styles.headingText}>Enter your 4-digit code</Text>
      <Text style={styles.label}>Code</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={10}
          value={text}
          onChangeText={text => setText(text)}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={[{color: Colors.light_green}, styles.text]}>
            Resend Code
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.light_green,
              borderRadius: '50%',
              height: 70,
              width: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => handleOTPVerification()}>
            <Image
              style={{height: 22, width: 13}}
              source={require('../assets/images/Vector.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GenerateOTP;

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 600,
    fontSize: 26,

    marginVertical: 30,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 8,
    marginBottom: 40,
  },
  flag: {
    width: 36,
    height: 36,
    marginRight: 8,
  },
  countryCode: {
    fontSize: 16,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    // marginTop: 20,
  },
});
