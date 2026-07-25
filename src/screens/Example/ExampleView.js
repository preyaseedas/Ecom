import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {setCount} from '../../Redux/CounterSlice';

export default function ExampleView() {
  const value = useSelector(state => state.countReducer.count);

  return (
    <View style={styles.container}>
      <Text style={styles.output}>Output: {value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  output: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 22,
  },
});
