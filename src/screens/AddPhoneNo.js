import React from 'react';
import {Image, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import PreviewButton from '../common/PreviewButton';

import {Text} from 'react-native';
import { FAB } from 'react-native-paper';
import { Colors } from '../common/Colors';
import { useNavigation } from '@react-navigation/native';
import LoginStepScreen from '../common/LoginStepScreen';

const AddPhoneNo = () => {
  const [text, setText] = React.useState('');
  const navigation= useNavigation();
  return (


  <View style={{flex: 1, padding: 20}}>
    
  {/* <LoginStepScreen headingText= "Enter your mobile number" labText="Mobile No" img={require('../assets/images/india.png')}/>*/}
 <PreviewButton />
    <Text style={styles.headingText}>Enter your mobile number</Text>
    <Text style={styles.label}>Mobile No</Text>
    <View style={styles.inputContainer}>
      <Image
        source={ require('../assets/images/india.png')}
        style={styles.flag}
      />
      <Text style={styles.countryCode}>+91</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={10}
        value={text}
        onChangeText={text => setText(text)}
      />
    </View>
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


const styles = StyleSheet.create({
headingText: {
  fontWeight: 600,
  fontSize: 26,
color:'black',
  marginVertical: 28,
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
})
export default AddPhoneNo;
