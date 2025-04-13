import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../common/CustomButton';
import {Dropdown} from 'react-native-element-dropdown';

import {useNavigation} from '@react-navigation/native';
import PreviewButton from '../common/PreviewButton';
import {Colors} from '../common/Colors';

const SelectLocation = () => {
  const navigation = useNavigation();

  const zoneData = [
    {label: 'Alipurduar', value: 'Alipurduar'},
    {label: 'Bankura', value: 'Bankura'},
    {label: 'Birbhum', value: 'Birbhum'},
    {label: 'Cooch Behar', value: 'Cooch Behar'},
    {label: 'Dakshin Dinajpur', value: 'Dakshin Dinajpur'},
    {label: 'Darjeeling', value: 'Darjeeling'},
    {label: 'Hooghly', value: 'Hooghly'},
    {label: 'Howrah', value: 'Howrah'},
  ];

  const areaData = [
    {label: 'Kolkata', value: 'Kolkata'},
    {label: 'Asansol', value: 'Asansol'},
    {label: 'Siliguri', value: 'Siliguri'},
    {label: 'Durgapur', value: 'Durgapur'},
    {label: 'Bardhaman', value: 'Bardhaman'},
    {label: 'Malda', value: 'Malda'},
    {label: 'Kharagpur', value: 'Kharagpur'},
    {label: 'Haldia', value: 'Haldia'},
  ];

  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

  return (
    <View style={{flex: 1, padding: 20}}>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Image
            style={styles.map}
            source={require('../assets/images/map.png')}
          />
          <Text style={styles.locationTextHeader}>Select Your Location</Text>

          <Text style={styles.locationText}>
            Switch on your location to stay in tune with what’s happening in
            your area
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            display: 'flex',
            gap: 30,
            marginTop: 35,
          }}>
          <View>
            <Text style={[styles.locationText, {textAlign: 'left'}]}>
              Your zone
            </Text>
            {/* <Dropdown
              // style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Type your Zone"
            /> */}

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={zoneData}
              search={false}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Type your Zone"
              value={value1}
              onChange={item => {
                setValue1(item.value);
              }}
            />
          </View>
          <View
          //style={{marginTop:20}}
          >
            <Text style={[styles.locationText, {textAlign: 'left'}]}>
              Your Area
            </Text>
            {/* <Dropdown
              // style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Type your Area"
            /> */}

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={areaData}
              search={false}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Type your Area"
              value={value2}
              onChange={item => {
                setValue2(item.value);
              }}
            />
          </View>
          <CustomButton
            buttonStyle={{
              backgroundColor:
                value1 === null || value2 === null
                  ? '#C4C4C4'
                  : Colors.light_green,
            }}
            //if any dropdown value if not selected then submit button will be in disable state
            isDisabled={value1 === null || value2 === null ? true : false}
            buttonTextStyle={{color: 'white'}}
            title={'submit'}
            onButtonPress={() => {
              navigation.replace('homePage');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SelectLocation;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    marginTop: 20,
  },
  map: {
    width: 211,
    height: 160,
    margin: 20,
  },
  locationTextHeader: {
    fontWeight: 600,
    fontSize: 30,
    margin: 10,
  },
  locationText: {
    fontSize: 18,
    color: 'grey',
    textAlign: 'center',
  },
  dropdown: {
    height: 50,
    backgroundColor: 'transparent',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 0.8,
  },

  placeholderStyle: {
    fontSize: 20,
    color: '#C4C4C4',
  },
  selectedTextStyle: {
    fontSize: 20,
    color: 'black',
  },
});
