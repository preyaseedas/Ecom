import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {TouchableOpacity} from 'react-native';
import {Colors} from '../../common/Colors';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../common/CustomButton';
import {AppTextInput} from 'react-native-basic-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setSignUpData} from '../../Redux/AuthSlice';
import HomePage from '../HomePage';

const LoginScreen = () => {
  const [phoneNo, setPhoneNo] = React.useState(0);
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const validateLogin = async () => {
    console.log('Start Api call');

    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: phoneNo,
        password: password,
      }),
    });

    const responseData = await response.json();

    console.log('resp', responseData);

    if (responseData.error === false) {
      console.log(responseData.message);
    } else {
      console.log(responseData.message);
    }
  };

  //   const doLoginScreenApiCall = async () => {
  //     console.log('Start Api call');

  //     const response = await fetch('http://localhost:3000/api/auth/signup', {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },

  //     });

  //     const responseData = await response.json();

  //     console.log('resp', responseData);

  //     if (responseData.error === false) {
  //   //    dispatch(setSignUpData(responseData));
  //     } else {
  //       console.log('Error in API call');
  //     }
  //   };

  return (
    <View style={{flex: 1, padding: 20, justifyContent: 'space-between'}}>
      <View style={{display: 'flex', alignItems: 'center', padding: 20}}>
        <Image
          style={styles.logoStyle}
          source={require('../../assets/images/appLogo.png')}
        />
      </View>
      <KeyboardAvoidingView style={{justifyContent: 'center'}}>
        <Text style={styles.headingText}>Sign Up</Text>
        <Text style={styles.disabledText}>
          Enter your phone no. and password
        </Text>

        <AppTextInput
          title="Phone No."
          titleStyle={styles.label}
          placeholder="Enter password"
          value={phoneNo}
          onChangeText={x => {
            setPhoneNo(x);
          }}
        />
        <AppTextInput
          title="Password"
          titleStyle={styles.label}
          secureTextEntry={true}
          rightAction={<Icon name="eye" type="Ionicon" />}
          value={password}
          onChangeText={x => {
            setPassword(x);
          }}
        />

        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={[styles.text, {textAlign: 'right'}]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <CustomButton
          title="Login"
          onButtonPress={
            () => {
              validateLogin();
            }
            // handleLoginScreen()
          }
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={[{color: 'black', marginRight: 5}, styles.text]}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={[{color: Colors.light_green}, styles.text]}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default LoginScreen;



const styles = StyleSheet.create({
  headingText: {
    fontSize: 28,
    fontWeight: 600,
  },
  logoStyle: {
    width: 80,
    height: 80,
    alignItems: 'center',
    marginTop: 10,
  },
  disabledText: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 10,
    color: 'grey',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 6,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginTop: 24,
    fontWeight: '600',
  },
  fontSize: 12,
  color: 'red',
  fontWeight: '400',
});
