import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../common/Colors';
import CustomButton from '../common/CustomButton';
import {useNavigation} from '@react-navigation/native';

const MyProfile = props => {
  const navigation = useNavigation();
  const loginOptionList = [
    {
      id: '1',
      title: 'Edit Profile',
      icon: require('../assets/images/editing.png'),
    },
    {
      id: '2',
      title: 'Change Password',
      icon: require('../assets/images/password.png'),
    },
    {id: '3', title: 'My Orders', icon: require('../assets/images/box.png')},
    {
      id: '4',
      title: 'Privacy Policy',
      icon: require('../assets/images/privacy.png'),
    },

    {
      id: '5',
      title: 'Terms and conditions',
      icon: require('../assets/images/note_text.png'),
    },
  ];

  const logOutOptionList = [
    {
      id: '1',
      title: 'Edit Profile',
      icon: require('../assets/images/editing.png'),
    },
    {
      id: '2',
      title: 'Change Password',
      icon: require('../assets/images/password.png'),
    },
    {id: '3', title: 'My Orders', icon: require('../assets/images/box.png')},
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}>
      <View style={[styles.ProfileViewContainer]}>
        <Text style={styles.headingText}> My Profile</Text>
        <View style={styles.innerContainer}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={
                require('../assets/images/unknownPerson.png') || props.image
              }
            />
            <Image
              style={styles.edit}
              source={require('../assets/images/edit.png')}
            />
          </View>
          <View style={{paddingHorizontal: 5, flex: 1}}>
            <Text style={styles.nameText}>Name {props.name}</Text>
            <Text style={styles.emailText}>
              {props.email}Kkkkkkkkkkkkkkkkkkkkkk
            </Text>
          </View>
        </View>
      </View>

      <View style={{padding: 20}}>
        <View>
        {login ?
          (<FlatList
            data={logOutOptionList}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  style={styles.optionContainer}
                  onPress={() => {
                    navigation.navigate(item.title);
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={styles.optionContainerIcon}
                      source={item.icon}
                    />
                    <Text style={styles.optionContainerText}>{item.title}</Text>
                  </View>
                  <Image
                    style={styles.optionContainerIcon}
                    source={require('../assets/images/nextArrow.png')}
                  />
                </TouchableOpacity>
              </View>
            )}
          />) :  
           (<FlatList
            data={loginOptionList}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  style={styles.optionContainer}
                  onPress={() => {
                    navigation.navigate(item.title);
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={styles.optionContainerIcon}
                      source={item.icon}
                    />
                    <Text style={styles.optionContainerText}>{item.title}</Text>
                  </View>
                  <Image
                    style={styles.optionContainerIcon}
                    source={require('../assets/images/nextArrow.png')}
                  />
                </TouchableOpacity>
              </View>
            )}
          />)}
        </View>
      </View>

      <View style={{marginButtom: 30}}>
        <CustomButton title="Log In" />
      </View>
    </View>
  );
};

export default MyProfile;
const styles = StyleSheet.create({
  ProfileViewContainer: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.light_green,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
  },
  headingText: {
    textAlign: 'center',
    //   padding: 20,
    marginTop: 10,
    fontWeight: 600,
    fontSize: 18,
    color: 'white',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  avatarContainer: {
    width: 90,
    height: 90,
    marginRight: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: '90%',
    height: '90%',
    borderRadius: 50,
  },
  edit: {
    height: 32,
    width: 32,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  nameText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 600,
  },
  emailText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 400,
  },
  optionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  optionContainerIcon: {
    height: 22,
    width: 22,
  },
  optionContainerText: {
    color: '#434343',
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 400,
  },
});
