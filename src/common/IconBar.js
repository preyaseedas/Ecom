import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const IconBar = () => {
  const buttonPressStyle = pressedIcon => {
    const isPressed = pressedIcon.include();
    return (
      <TouchableOpacity
        style={
          isPressed ? styles.pressedIconEffect : 'null'
        }></TouchableOpacity>
    );
  };

  return (
    <View style={styles.locationContainer}>
      <TouchableOpacity onPress={buttonPressStyle}>
        <Image
          style={styles.icon}
          source={require('../assets/images/home.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={buttonPressStyle}>
        <Image
          style={styles.icon}
          source={require('../assets/images/cart.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={buttonPressStyle}>
        <Image
          style={styles.icon}
          source={require('../assets/images/profile.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
export default IconBar;
const styles = StyleSheet.create({
  locationContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '100%',
    height: 116,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    shadowOpacity: 1,
    backgroundColor: 'red'
  },
  icon: {
    height: 56,
    width: 56,
  },
  pressedIconEffect: {
    height: 56,
    width: 56,
    borderRadius: '50%',
    backgroundColor: 'green',
  },
});
