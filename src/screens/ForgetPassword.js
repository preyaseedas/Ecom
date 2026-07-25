import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {Image, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import PreviewButton from '../common/PreviewButton';
import {Colors} from '../common/Colors';
const ForgetPassword = () => {
  const [text, setText] = React.useState('');
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, padding: 20}}>
      <PreviewButton onButtonPress={() => navigation.goBack()} />
      <Text style={styles.headingText}>Forgot Password ?</Text>
      <Text style={styles.label}>Enter mobile number or email id</Text>

      <TextInput
        style={styles.inputContainer}
        keyboardType="numeric"
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
        onPress={() => navigation.navigate('GenerateOTP')}>
        <Image
          style={{height: 22, width: 13}}
          source={require('../assets/images/Vector.png')}
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
