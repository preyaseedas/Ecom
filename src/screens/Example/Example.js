import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increaseCount, decrementCount} from '../../Redux/CounterSlice';

export default function Example() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [number, setNumber] = useState(0);

  //const value = useSelector(state => state.countReducer.count);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a number"
        keyboardType="numeric"
        value={number}
        onChangeText={x => {
          setNumber(Number(x));
        }}
      />

      <TouchableOpacity
        style={[styles.btn, {marginBottom: 30}]}
        onPress={() => {
          navigation.navigate('Emp2');
        }}>
        <Text style={styles.btnText}>Go Next</Text>
      </TouchableOpacity>

      <View style={styles.btnRow}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            dispatch(decrementCount(number - 1));
          }}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            dispatch(increaseCount(number));
          }}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
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
