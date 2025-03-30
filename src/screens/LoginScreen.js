import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../common/CustomButton';
import {TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

const LoginScreen = () => {
  const [phoneNo, setPhoneNO] = React.useState();
  const [password, setPassword] = React.useState();
  return (
    <View style={{flex: 1, padding: 20}}>
      <View style={{display: 'flex', alignItems: 'center', padding: 20}}>
        <Image
          style={styles.logoStyle}
          source={require('../assets/images/appLogo.png')}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.headingText}>Login</Text>
        <Text style={styles.disabledText}>
          Enter your phone no. and password
        </Text>
        <TextInput
          mode="flat"
          label="Phone No"
          textColor="black"
          style={{marginVertical: 50}}
          contentStyle={{backgroundColor: 'white'}}
          underlineColor="red"
          value={phoneNo}
          onChangeText={text => setPhoneNO(text)}
        />
        <TextInput
          contentStyle={{backgroundColor: 'transparent'}}
          underlineColor="red"
          label="password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity>
          <Text style={[styles.text, {textAlign: 'right'}]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <CustomButton title="Log In" />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {' '}
          <Text style={[{color: 'black'}, styles.text]}>
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity>
            <Text style={[{color: 'green'}, styles.text]}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
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
});
