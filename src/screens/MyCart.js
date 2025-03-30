import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const MyCart = () => {
  const cartItems = [
    {
      id: '1',
      itemName: 'Bell Pepper Red',
      image: require('../assets/images/bellPapper.png'),
      quantity: '1kg',
      price: 50,
    },
    {
      id: '2',
      itemName: 'Egg Chicken Red',
      image: require('../assets/images/egg.png'),
      quantity: '1kg',
      price: 50,
    },
    {
      id: '3',
      itemName: 'Egg Chicken Red',
      image: require('../assets/images/banana.png'),
      quantity: '1kg',
      price: 50,
    },
    {
      id: '4',
      itemName: 'Egg Chicken Red',
      image: require('../assets/images/ginger.png'),
      quantity: '1kg',
      price: 50,
    },
  ];

  return (
    <View>
      <Text>My Cart</Text>
      <View>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.FlatListContainer}>
              <View>
                <Image style={styles.image} source={item.image} />
              </View>
              <View>
                <Text>{item.itemName}</Text>
                <Text>{item.quantity}</Text>
                <View style={styles.quantitySet}>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      source={require('../assets/images/minusIcon.png')}
                    />
                  </TouchableOpacity>
                  <Text>1</Text>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      source={require('../assets/images/plusIcon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <TouchableOpacity>
                  <Image
                    style={styles.icon}
                    source={require('../assets/images/crossIcon.png')}
                  />
                </TouchableOpacity>
                <Text>{item.price}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};
export default MyCart;
const styles = StyleSheet.create({
  FlatListContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', borderBottomColor:"grey", borderBottomWidth:1, margin:10
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  quantitySet: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
});
