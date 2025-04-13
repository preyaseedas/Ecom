import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

//import IconBar from '../common/IconBar';
//import {Searchbar} from 'react-native-paper';

import {Colors} from '../common/Colors';
//import { SearchBar } from '@rneui/themed';
//import { SearchBar } from 'react-native-elements';

const HomePage = props => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between', alignItems:"center"
          }}>
          <Text style={styles.appNamingText}>D,Grosse</Text>
          <Image
            style={{height: 20, width: 20}}
            source={require('../assets/images/notifications.png')}
          />
        </View>
        <TouchableOpacity
          style={styles.locationContainer}
          onPress={() => {
            navigation.navigate('selectLocation');
          }}>
          <View style={{flexDirection: 'row'}}>
            {' '}
            <Image
              style={styles.logo}
              source={require('../assets/images/locationLogo.png')}
            />
            <View>
              <Text style={{fontSize: 12, letterSpacing: 0.2, color: 'grey'}}>
                Your Location
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  letterSpacing: 0.2,
                  color: 'black',
                  fontWeight: 500,
                }}>
                32 Llanberis Close, Tonteg, CF38 1HR
              </Text>
            </View>
          </View>
          <Image
            style={styles.nextArrow}
            source={require('../assets/images/nextArrow.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#ddd',
            paddingHorizontal: 15,
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 8,
            marginTop: 10,
            color: 'red',
          }}>
          <TouchableOpacity>
            <Image
              style={{height: 24, width: 24, marginRight: 15}}
              source={require('../assets/images/searchIcon.png')}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor={'grey'}
            style={{fontSize: 18, fontWeight: 400, backgroundColor: '#ddd'}}
          />
        </View>

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
            height: 130, marginTop:15,
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
                backgroundColor: Colors.light_green,
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
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => {
              navigation.navigate(item.name);
            }}>
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
        }}></View>
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
    width: '100%',
    height: 45,
    display: 'flex',
    flexDirection: 'row',

    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appNamingText: {
    fontWeight: 600,
    color: '#37474F',
    fontSize: 20,
  },
  logo: {
    height: 45,
    width: 45,
    marginRight: 10,
  },
  nextArrow: {
    width: 24,
    height: 24,
  },
  offerContainer: {
    width: '100%',
    height: 100,
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
    //shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    //elevation: 3,
  },
  image: {
    width: 100,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
