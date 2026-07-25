import React from 'react';
import {Image, Text} from 'react-native';
import {StyleSheet, View} from 'react-native';
import CustomButton from '../common/CustomButton';
const OrderDetails = () => {
  return (
    <View>
      {' '}
      <Text>Order Details</Text>
      <Text style={{color: '#5A5A5A', fontSize: 14, fontWeight: 400}}>
        price Details
      </Text>
      <Text
        style={{
          textAlign: 'left',
          paddingVertical: 10,
          borderBottomColor: '#ddd',
          borderBottomWidth: 1,
        }}>
        Order Number : DG547866{' '}
      </Text>
      <View>
        <Image />
        <View>
          <Text>Bell Pepper Red</Text>
          <Text>1kg, Price</Text>
          <Text>218.00</Text>
        </View>
        <View>
          <Text>Order Confirmed</Text>
          <Text>Tue, 1, 2023</Text>
        </View>
      </View>
      <Text style={styles.text}> Customer Name : Rekha Sinha</Text>
      <Text style={styles.text}>Address : 68 Purbachal main road</Text>
      <Text style={styles.text}>Address : C201</Text>
      <Text style={styles.text}>Landmark : Shakti Shangha</Text>
      <Text style={styles.text}>City : Rekha Sinha</Text>
      <Text style={styles.text}>Zip code : 700078</Text>
      <Text style={styles.text}> Country : India </Text>
      <Text style={{color: '#5A5A5A', fontSize: 14, fontWeight: 400}}>
        price Details
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.text}>Product Amount (3kg)</Text>
        <Text style={styles.text}>654.00</Text>
        <Text style={styles.text}>Discount</Text>
        <Text style={styles.text}>-10.00</Text>
        <Text style={styles.text}>GST(18%)</Text>
        <Text style={styles.text}>+18.00</Text>
        <Text style={[styles.text, {color: '#3DBD32'}]}>Sub Total</Text>
        <Text style={[styles.text, {color: '#3DBD32'}]}>+662.00</Text>
        <Text style={[styles.text, {color: '#FC2222'}]}>Shipping Charges</Text>
        <Text style={[styles.text, {color: '#FC2222'}]}>+20.00</Text>
        <View
          style={{
            backgroundColor: '#ddd',
            height: 60,
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 0,
          }}>
          <Text style={styles.highlightedText}>Total</Text>
          <Text style={styles.highlightedText}>682.00</Text>
        </View>
      </View>
      <CustomButton title="Confirm" />
    </View>
  );
};
export default OrderDetails;
const styles = StyleSheet.create({
  text: {
    fontWeight: 400,
    fontsize: 16,
  },
});
