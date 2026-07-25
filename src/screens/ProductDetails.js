import React from 'react';
import PreviewButton from '../common/PreviewButton';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import CustomButton from '../common/CustomButton';
import {Text} from 'react-native';

const ProductDetails = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 320,
          width: '100%',
          backgroundColor: '#ddd',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          padding: 20,
        }}>
        <PreviewButton />
        <Image
          style={{height: '90%', width: '90%', resizeMode: 'contain'}}
          source={require('../assets/images/apple.png')}
        />
      </View>
      <View style={{padding: 20}}>
        <Text style={styles.ProductText}>Naturel Red Apple</Text>
        <Text>1kg, Price</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 24,
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <TouchableOpacity
              style={{
                borderRadius: 15,
                height: 45,
                width: 45,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {}}>
              <Image
                style={styles.icon}
                source={require('../assets/images/minusIcon.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: 'black',
                textAlign: 'left',
                marginHorizontal: 10,
                borderColor: '#ddd',
                borderWidth: 1,
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderRadius: 14,
              }}>
              0
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 15,
                height: 45,
                width: 45,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {}}>
              <Image
                style={styles.icon}
                source={require('../assets/images/plusIcon.png')}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.ProductText}>4.99</Text>
        </View>
    <View style={{ paddingVertical:10,
      borderBottomWidth: 1,
            borderBottomColor: '#ddd',

    }}>
     <Text style={styles.detailsText}>Product Detail</Text>
        <Text>
          Apples are nutritious. Apples may be good for weight loss. apples may
          be good for your heart. As part of a healtful and varied diet.
        </Text>
        </View>
        <View style={{ paddingVertical:10,
      borderBottomWidth: 1,
            borderBottomColor: '#ddd',

    }}>



          <Text style={styles.detailsText}>Nutritions</Text>
        </View>
        <CustomButton title="Added to Cart" />
      </View>
    </View>
  );
};

export default ProductDetails;
const styles = StyleSheet.create({
  ProductText: {
    fontWeight: 700,
    fontSize: 24,
    color: 'black',
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
    flex: 1,
  },
  icon: {
    height: 28,
    width: 28,
  },
  detailsText: {
    fontWeight: 500,
    fontSize: 18,
    color: 'black',
  },
});
