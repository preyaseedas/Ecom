import React, {useCallback, useRef} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
//import {Input} from 'react-native-elements';
import CustomButton from '../common/CustomButton';
import PreviewButton from '../common/PreviewButton';
import {TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
//import {OutlinedTextField} from 'rn-material-ui-textfield';
const EditProfile = () => {
  const [text, setText] = React.useState('');
const navigation = useNavigation();
  return (
    <View style={{padding: 20, flex: 1, justifyContent: 'space-between'}}>
      <View style={{flex: 0.8}}>
        <View style={styles.subContainer}>
          <PreviewButton />
          <Text style={styles.editText}>Edit Profile</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
            <Image
              style={styles.profileImage}
              source={require('../assets/images/profileImage.png')}
            />
            <TouchableOpacity>
              <Image />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <TextInput
          mode="outlined"
          label="Name"
          contentStyle={{
            borderWidth: 0.3,
            borderRadius: 4,
            borderColor: 'green',
          }}
          outlineColor="green"
          value={text}
          onChangeText={x => setText(x)}
        />
        <TextInput
          mode="outlined"
          label="Email Address"
          contentStyle={{borderWidth: 1, borderRadius: 4, borderColor: 'green'}}
          outlineColor="green"
          value={text}
          onChangeText={x => setText(x)}
        />
        <TextInput
          mode="outlined"
          label="Mobile No"
          contentStyle={{
            borderWidth: 0.3,
            borderRadius: 4,
            borderColor: 'green',
          }}
          outlineColor="green"
          value={text}
          onChangeText={x => setText(x)}
        />
        <TextInput
          mode="outlined"
          label="Enter Address"
          contentStyle={{
            borderWidth: 0.3,
            borderRadius: 4,
            borderColor: 'green',
          }}
          outlineColor="green"
          value={text}
          onChangeText={x => setText(x)}
        />
      </View>
      {/* <OutlinedTextField
    
        />/*}
        {/*
        <Input
        inputContainerStyle={styles.inputContainer}
        label="Name"
        labelStyle={styles.labelText}
        placeholder="BASIC INPUT"
        inputStyle={{}}
        onChangeText={() => {}}
      */}
      <View style={{flex: 0.2}}>
        <CustomButton title="Update"  onButtonPress={()=> navigation.goBack()}/>
      </View>
    </View>
  );
};
export default EditProfile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  subContainer: {
    display: 'flex',
    width: '62%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editText: {
    fontWeight: 600,
    fontSize: 20,
  },
  profileImage: {
    width: 130,
    height: 130,
    margin: 20,
  },
  inputContainer: {
    width: '100%',
    height: 62,

    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3DBD32',
  },
  labelText: {
    fontWeight: 400,
    fontSize: 12,

    color: ' #3DBD32',
  },
  inputText: {
    fontWeight: 400,
    fontSize: 18,
    color: 'black',
  },
});
