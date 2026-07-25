import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from '../common/CustomButton';
import {TouchableOpacity} from 'react-native';

import HomePageTabBar from './HomePageTabBar';
import {Colors} from '../common/Colors';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [phoneNo, setPhoneNo] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [phoneError, setPhoneError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const navigation = useNavigation();

  const validatePhone = text => {
    const regex = /^[0-9]{0,10}$/;
    if (!regex.test(text) || text.length !== 10) {
      setPhoneError('Enter 10 digit Phone no');
    } else {
      setPhoneError('');
    }
    setPhoneNo(text);
  };
  const validatePassword = password => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,12}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must be 8-12 characters long, and include at least one letter, one number, and one special character.',
      );
    } else {
      setPasswordError('');
    }
    setPassword(password);
  };

  const validateConfirmPassword = password => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,12}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must be 8-12 characters long, and include at least one letter, one number, and one special character.',
      );
    } else {
      setPasswordError('');
    }
    setConfirmPassword(password);
  };

  const doSignUpApiCall = async () => {
    const response = await fetch('http://localhost:3000/api/auth/signup', {
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

    const responseData = response.json();

    console.log('resp', responseData);
  };

  const handleSignUp = () => {
    // Check for errors and empty fields
    if (!phoneNo || phoneError) {
      alert('Please enter a valid phone number.');
      return;
    }

    if (!password || passwordError) {
      alert('Please enter a valid password.');
      return;
    }
    if (!confirmPassword || passwordError) {
      alert('Please enter a valid password.');
      return;
    }
    if (password !== confirmPassword) {
      alert('password &confirm password should be match');
      return;
    }
    doSignUpApiCall();
    // navigation.navigate('HomePage');
  };
  return (
    <View style={{flex: 1, padding: 20, justifyContent: 'space-between'}}>
      <View style={{display: 'flex', alignItems: 'center', padding: 20}}>
        <Image
          style={styles.logoStyle}
          source={require('../assets/images/appLogo.png')}
        />
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text style={styles.headingText}>Sign Up</Text>
        <Text style={styles.disabledText}>
          Enter your phone no. and password
        </Text>
        <Text style={styles.label}>Phone No</Text>
        {/* <View style={styles.inputContainer}> */}
          <TextInput
            style={styles.inputContainer}
            keyboardType="phone-pad"
           //  placeholder='reddd'
            maxLength={10}
            value={phoneNo}
            onChangeText={validatePhone}
          />
        {/* </View> */}
        {phoneError ? <Text style={styles.error}>{phoneError}</Text> : null}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={validatePassword}
            secureTextEntry={!showPassword1}
          />
          <TouchableOpacity onPress={() => setShowPassword1(!showPassword1)}>
            {
              <Image
                style={{height: 20, width: 20}}
                source={
                  showPassword1
                    ? require('../assets/images/ViewPasswordIcon.png')
                    : require('../assets/images/hidePasswordIcon.png')
                }
              />
            }
          </TouchableOpacity>
        </View>
        <Text style={styles.label}> Re Enter Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={validateConfirmPassword}
            secureTextEntry={!showPassword2}
          />
          <TouchableOpacity onPress={() => setShowPassword2(!showPassword2)}>
            {
              <Image
                style={{height: 20, width: 20}}
                source={
                  showPassword2
                    ? require('../assets/images/ViewPasswordIcon.png')
                    : require('../assets/images/hidePasswordIcon.png')
                }
              />
            }
          </TouchableOpacity>
        </View>
      </View>
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={[styles.text, {textAlign: 'right'}]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <CustomButton title="Sign Up" onButtonPress={() => handleSignUp()} />
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
          <TouchableOpacity onPress={() => navigation.navigate('Sign UP')}>
            <Text style={[{color: Colors.light_green}, styles.text]}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SignUp;
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
