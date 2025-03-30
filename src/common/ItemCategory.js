import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PreviewButton from './PreviewButton';
import {useNavigation} from '@react-navigation/native';

const ItemCategory = props => {
  const navigation = useNavigation();

  return (
    <View style={{padding: 20}}>
      <View style={styles.topContainer}>
        <PreviewButton />
        <Text style={styles.editText}>{props.heading}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('filter');
          }}>
          <Image
            style={styles.filter}
            source={require('../assets/images/filter.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        {props.list.map(item => (
          <View key={item.id} style={styles.itemInnerContainer}>
            <Image style={styles.img} source={item.img} />
            <View style={{alignItems: 'left'}}>
              <Text style={styles.namingText}>{item.itemName}</Text>
              <Text style={styles.weightText}>{item.weight}l, Price</Text>
            </View>
            <View style={styles.itemInnerSubContainer}>
              <Text style={styles.priceText}>{item.price}</Text>
              <Image
                style={styles.addToCardImg}
                source={require('../assets/images/addToCart.png')}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
export default ItemCategory;

const styles = StyleSheet.create({
  topContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editText: {
    fontWeight: 600,
    fontSize: 20,
  },
  filter: {
    height: 20,
    width: 20,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemInnerContainer: {
    width: '48%',
    marginTop: 20,
    borderColor: '#E2E2E2',
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  img: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  namingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  weightText: {
    color: 'grey',
    fontSize: 14,
    textAlign: 'left',
  },
  priceText: {
    fontSize: 18,
  },
  itemInnerSubContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addToCardImg: {
    height: 46,
    width: 46,
  },
});
