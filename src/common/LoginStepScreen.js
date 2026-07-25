import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import PreviewButton from '../common/PreviewButton';

import {Text} from 'react-native';
import {FAB} from 'react-native-paper';
import {Colors} from '../common/Colors';
import {useNavigation} from '@react-navigation/native';

const LoginStepScreen = ({headingText,labText, img})=> {
  const [text, setText] = React.useState('');
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, padding: 20}}>
    
      <PreviewButton />
      <Text>headingText</Text>
      <Text style={styles.headingText}>{headingText}</Text>
      <Text style={styles.label}>{labText}</Text>
      <View style={styles.inputContainer}>
        <Image
          source={ null || img}
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
          <Text >headingText</Text>
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
export default LoginStepScreen;

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

});
