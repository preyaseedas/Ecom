import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {Image, TouchableOpacity} from 'react-native';
import {View} from 'react-native';

import {Colors} from '../../common/Colors';
import {useDispatch} from 'react-redux';
import {setForgetData} from '../../Redux/AuthSlice';
import PreviewButton from '../../common/PreviewButton';

const ForgetPassword = () => {
  const [text, setText] = React.useState(0||'');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const hamdleButtonPress = () => {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (text.length == 10 || emailReg.test(text)) {
      doApiCall()
    } else {
      console.error('Enter valid email id or password');
    }
  };

  const doApiCall = async () => {
    console.log('Start Api call');

    const response = await fetch('http://localhost:3000/api/auth/forgot-password', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: text,
       
      }),
    });
  
    const responseData = await response.json();

    console.log('resp', responseData);

    if (responseData.error === false) {
      dispatch(setForgetData(text));
      navigation.navigate('GenerateOTP');
    } else {
      console.log('Error in API call');
    }
  };

  return (
    <View style={{flex: 1, padding: 20}}>
      <PreviewButton onButtonPress={() => navigation.goBack()} />
      <Text style={styles.headingText}>Forgot Password ?</Text>
      <Text style={styles.label}>Enter mobile number or email id</Text>

      <TextInput
        style={styles.inputContainer}
      //  keyboardType="numeric"
        maxLength={10}
        value={text}
        onChangeText={text => setText(text)}
      />

      <TouchableOpacity
        style={{
          backgroundColor: Colors.light_green,
          borderRadius: '50%',
          height: 70,
          width: 70,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          margin: 20,
          right: 0,
          bottom: 40,
        }}
        onPress={() => hamdleButtonPress()}>
        <Image
          style={{height: 22, width: 13}}
          source={require('../../assets/images/Vector.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ForgetPassword;

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
});
