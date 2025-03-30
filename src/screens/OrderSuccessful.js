import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import CustomButton from '../common/CustomButton';
const OrderSuccessful = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../assets/images/orderSuccess.png')}
        />
      </View>
      <View>
        <Text style={styles.orderText}>Your Order has been accepted</Text>
        <Text style={styles.text}>
          Your items has been placed and is on {'\n'} it’s way to being processed
        </Text>
      </View>
      <CustomButton title="View Details" onButtonPress={() => {}} />
    </View>
  );
};
export default OrderSuccessful;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: "space-evenly",
  },
  image: {width: 269, height: 240},
  orderText: {
    fontWeight: '500',
    fontSize: 28,

    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginTop: 20, color:'grey',
    textAlign: 'center',
  },
});
