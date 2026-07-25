import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PreviewButton from '../common/PreviewButton';
import {Image} from 'react-native';
const MyOrder = () => {

    const ordersData = [
        {
          id: '1',
          image: require('../assets/images/coffee.png'), 
          orderId: '#21364598748',
          status: 'Pending',
          address: '5544 jhyfts jjan....',
          itemsCount: 10,
          deliveryDate: 'August 23 ,Wednesday',
          price: '₹22',
        },
        {
          id: '2',
          image: require('../assets/images/coffee.png'),
          orderId: '#21364598748',
          status: 'Pending',
          address: '5544 jhyfts jjan....',
          itemsCount: 10,
          deliveryDate: 'August 23 ,Wednesday',
          price: '₹22',
        },
        {
          id: '3',
          image: require('../assets/images/coffee.png'),
          orderId: '#21364598748',
          status: 'Pending',
          address: '5544 jhyfts jjan....',
          itemsCount: 10,
          deliveryDate: 'August 23 ,Wednesday',
          price: '₹22',
        },
      ];

    const renderOrder=({item}) => (
        <View style={{}}>
        <View>
          <Image />
          <View>
            <Text>{item.orderId}</Text>
            <Text>{item.address}</Text>
            <Text>#21364598748</Text>
          </View>
          <Text>Delivered</Text>
        </View>
        <View>
          <Text>10 Apr 2023 at 7:20</Text>
          <Text>22</Text>
        </View>
        <TouchableOpacity>
          <Text>Order Details</Text>
        </TouchableOpacity>
        </View> 
    
    )
  return (
    <View style={{padding:20}}>
      <View style={{}}>
        <PreviewButton />
        <Text style={styles.headingText}>My order</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center',}}>
      <Button  color="black" title='previous'/>
        <Button  color="black" title='Upcoming'/>
      </View>
      <FlatList
        data={ordersData}
        keyExtractor={item => item.id}
        renderItem={renderOrder}
      />

      
    </View>
  );
};
export default MyOrder;
const styles = StyleSheet.create({
  headingText:{
    fontWeight: 600,
    fontSize: 18,

    textAlign:'center' ,

    }
});
