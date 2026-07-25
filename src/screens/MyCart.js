import React, {useState} from 'react';
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
              <View style={{flex: 1}}>
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
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 15,
                    }}>
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: 'black',
                        textAlign: 'left',
                        marginHorizontal: 10,
                      }}>1
                    </Text>
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
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: 'black',
                      textAlign: 'left',
                    }}>
                    {item.price}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
        <CustomButton
          title="Go to Checkout"
          onButtonPress={() => {
            setCheckoutModelVisible(!checkoutModelVisible);
          }}
        />
        <Modal visible={checkoutModelVisible} >
          <View style= {{padding:20, }}>
            <View style= {styles.flex} >
              <Text style={styles.checkout}>Checkout</Text>
              <Image
                style={styles.icon}
                source={require('../assets/images/crossIcon.png')}
              />
            </View>
            <View  style= {styles.flex}>
              <Text style={{color:"#7C7C7C", fontSize:18, fontWeight:600}}>Delivery</Text>
              <TouchableOpacity>
                <Text style={styles.highlightedText}>Select Method</Text>
                <Image
                  style={styles.icon}
                  source={require('../assets/images/crossIcon.png')}
                />
              </TouchableOpacity>
            </View>
            <View  style= {styles.flex}>
              <Text style={{color:"#7C7C7C", fontSize:18, fontWeight:600}}>Pament</Text>
              <Text style={styles.highlightedText}>COD</Text>
            </View>
            <Text style={{color:'#5A5A5A', fontSize:14, fontWeight:400}}>price Details</Text>
            <View style={{flexDirection:'row',flexWrap:'wrap', justifyContent:'space-between',alignItems:'center'}}>
              <Text style={styles.text}>Product Amount (3kg)</Text>
              <Text style={styles.text}>654.00</Text>
              <Text style={styles.text}>Discount</Text>
              <Text style={styles.text}>-10.00</Text>
              <Text style={styles.text}>GST(18%)</Text>
              <Text style={styles.text}>+18.00</Text>
              <Text style={[styles.text,{color:'#3DBD32'}]}>Sub Total</Text>
              <Text  style={[styles.text,{color:'#3DBD32'}]}>+662.00</Text>
              <Text  style={[styles.text,{color:'#FC2222'}]}>Shipping Charges</Text>
              <Text style={[styles.text,{color:'#FC2222'}]}>+20.00</Text>
              <View style={{backgroundColor:'#ddd', height:60, width:"100%", justifyContent:'space-between', alignItems:'center', padding:0}}>
              <Text style={styles.highlightedText}>Total</Text>
              <Text style={styles.highlightedText}>682.00</Text>
            </View></View>
            <CustomButton title="Confirm" />
            <Text>
              By placing an order you agree to our Terms And Conditions
            </Text>
          </View>
        </Modal>
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
    flex: 1,
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  quantitySet: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
    flex: 1,
  },
  icon: {
    height: 28,
    width: 28,
  },
  checkout:{
    fontWeight: 600,
    fontSize: 24,
 color:'black',
    },
  flex: {flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderBottomColor:"#ddd", borderBottomWidth:1},
  highlightedText: {
   
fontWeight: 600,
fontSize: 18,
color:'black',


  },
  text:{

fontWeight: 400,
fontsize: 16,


  }
});
