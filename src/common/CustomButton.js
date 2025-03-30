import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from './Colors';


const CustomButton = props => {


  return (<View style={{alignItems:'center'}}>
    <TouchableOpacity
      disabled={props.isDisabled || false}
      style={[styles.button, props.buttonStyle]}
      onPress={props.onButtonPress}>
      <Text style={[styles.appButtonText, props.buttonTextStyle]}>
        {props.title}
      </Text>
    </TouchableOpacity></View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 67,
    borderRadius: 20,
    backgroundColor: Colors.light_green,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  appButtonText: {
    fontWeight: 400,
    fontSize: 20,
    color: 'white',
  },
});
