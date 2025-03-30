import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import IconBar from '../common/IconBar';
import {Searchbar} from 'react-native-paper';
//import { SearchBar } from '@rneui/themed';
//import { SearchBar } from 'react-native-elements';

const HomePage = props => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.appNamingText}>D,Grosse</Text>
          <Image style={{height:20, width:20}} source={require('../assets/images/notifications.png')} />
        </View>
        <TouchableOpacity
          style={styles.locationContainer}
          onPress={() => {
            navigation.navigate('selectLocation');
          }}>
          <Image
            style={styles.logo}
            source={require('../assets/images/locationLogo.png')}
          />
          <View>
            <Text>Your Location</Text>
            <Text>{props.chooseLocation}</Text>
          </View>
          <Image
            style={styles.nextArrow}
            source={require('../assets/images/nextArrow.png')}
          />
        </TouchableOpacity>

        {/*<SearchBar 
   placeholder="Search"
        onChangeText={(text) => setSearch(text)}
        value={search}
        lightTheme
        round
        autoCorrect={false}
/>*/}

        <View
          style={{
            height: 150,
            width: '100%',
            backgroundColor: 'red',
            borderRadius: 15,
            position: 'relative',
          }}>
          <Image
            style={{height: '100%', width: '100%', borderRadius: 15}}
            source={require('../assets/images/offerImage.png')}
          />
          <View
            style={{
              position: 'absolute',
              width: '50%',
              height: '100%',
              right: 0,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.offerContainerText}>
              50% OFF{'\n'}On dairy products
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                marginTop: 10,
                backgroundColor: 'green',
                paddingHorizontal: 18,
                paddingVertical: 3,
              }}>
              <Text>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.itemContainer}>
        {[
          {
            id: 1,
            img: require('../assets/images/fruits.png'),
            name: 'Fruits & Vegetables',
          },
          {
            id: 2,
            img: require('../assets/images/breakfast.png'),
            name: 'Breakfast',
          },
          {
            id: 3,
            img: require('../assets/images/sauce.png'),
            name: 'Beverages',
          },
          {
            id: 4,
            img: require('../assets/images/meat.png'),
            name: 'Meat & Fish',
          },
          {id: 5, img: require('../assets/images/chips.png'), name: 'Snacks'},
          {id: 6, img: require('../assets/images/dairy.png'), name: 'Dairy'},
        ].map(item => (
          <TouchableOpacity key={item.id} style={styles.item} onPress={() =>{navigation.navigate(item.name)}}>
            <Image source={item.img} style={styles.image} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View
        style={{
          bottom: 10,
          backgroundColor: 'blue',
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <IconBar />
      </View>
    </View>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 20,
  },
  locationContainer: {
    borderWidth: 1,
    borderColor: 'red',
    width: '100%',
    height: 45,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  appNamingText: {
    fontWeight: 600,
    color: '#37474F',
    fontSize: 20,
  },
  logo: {
    height: 45,
    width: 45,
  },
  nextArrow: {
    width: 10,
    height: 18,
  },
  offerContainer: {
    width: '100%',
    height: 130,
    borderColor: 'red',
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 20,
    position: 'relative',
    borderRadius: 20,
  },
  offerContainerImage: {
    width: 152,
    height: 137,
    position: 'absolute',
    zIndex: 100,
  },
  offerContainerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  item: {
    width: '47%',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
