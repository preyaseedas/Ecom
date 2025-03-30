import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

const PreviewButton = props => {
  return (
    <TouchableOpacity onPress={props.onButtonPress}>
      <Image
       style={styles.prevButton}
        source={require('../assets/images/back_arrow.png')}
      />
    </TouchableOpacity>
  );
};
export default PreviewButton;

const styles = StyleSheet.create({
  prevButton: {
    height: 17,
    width: 10,
  },
});
