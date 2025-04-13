import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomButton from '../common/CustomButton';

const MyCart = () => {

  const [checkoutModelVisible, setCheckoutModelVisible] = useState(false);
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
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: 'black',
          textAlign: 'center',
          margin: 30,
        }}>
        My Cart
      </Text>
      <View style={{borderTopColor: '#ddd', borderTopWidth: 1}}>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.FlatListContainer}>
              <View style={{marginRight: 30}}>
                <Image style={styles.image} source={item.image} />
              </View>
              <View  style={{ flex:1}} >
                <View style={styles.quantitySet}>
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: 'black',
                        textAlign: 'left',
                      }}>
                      {item.itemName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: 'grey',
                        textAlign: 'left',
                      }}>
                      {item.quantity}, Price
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      source={require('../assets/images/crossIcon.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.quantitySet}>
                  <View style={{flexDirection:'row', alignItems:'center',marginTop:15,  }}>
                    <TouchableOpacity
                      style={{
                        borderColor: '#ddd',
                        borderWidth: 1,
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
                    <Text   style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: 'black',
                        textAlign: 'left', marginHorizontal:10
                      }}> 1 </Text>
                    <TouchableOpacity
                      style={{
                        borderColor: '#ddd',
                        borderWidth: 1,
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
                  <Text style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: 'black',
                        textAlign: 'left',
                      }}> {item.price}</Text>
                </View>
              </View>
            </View>
          )}
        />
         <CustomButton  title= "Go to Checkout" onButtonPress={()=>{setCheckoutModelVisible(!checkoutModelVisible)}}/>
     
      </View>
     
    </View>
  );
};
export default MyCart;
const styles = StyleSheet.create({
  FlatListContainer: {
  
    flexDirection: 'row',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingVertical: 25,
flex:1
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  quantitySet: {
    flexDirection: 'row',
    alignItems: 'center',
  
       justifyContent:'space-between', flex:1 
  },
  icon: {
    height: 28,
    width: 28,
  },
});
