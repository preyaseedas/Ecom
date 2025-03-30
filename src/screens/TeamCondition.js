import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PreviewButton from '../common/PreviewButton';
const TermCondition = () => {
  return (
    <View>
      <View style={styles.headContainer}>
        <PreviewButton />
        <Text style={{marginLeft:'20%',color:'black', fontSize:20, fontWeight:600,}}>Term and Condition</Text>
      </View>
      <View style={{padding:20}}>
      <Text style={styles.disabledText}>Latest Update on August 16, 2023</Text>
      <Text style={styles.headText}>Terms of use</Text>

      <Text style={styles.text}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </Text>

      <Text style={styles.headText}> Acceptance of terms</Text>
      <Text style={styles.text}>
        packages and web page editors now use Lorem Ipsum as their default model
        text, and a search for 'lorem ipsum' will uncover many web sites still
        in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose {'\n'}There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour,
      </Text>

      <Text style={styles.headText}>License and access</Text>
      <Text style={styles.text}>
        packages and web page editors now use Lorem Ipsum as their default model
        text, and a search for 'lorem ipsum' will uncover many web sites still
        in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose
      </Text>
      <Text style={styles.disabledText}>
        By continuing past this page you agree to Our Terms, Cookie policy and
        privacy policy.All trademarks are properties of their respective owners.{' '}
        {'\n\n'}Copyright 2023-2024 D,Grosse All Rights Reserved.
      </Text>
    </View></View>
  );
};
export default TermCondition;
const styles = StyleSheet.create({
  headContainer: {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-start', 
    padding: 20,
    borderBottomColor: '#ddd', 
    borderBottomWidth:1,
    alignItems: 'center',
    textDecorationColor: 'black',
  },
  text: {
    fontSize: 16, marginTop:10,
    fontWeight: '400',
    color: 'black',
  },
  headText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black', marginTop:20,
  },
  disabledText:{ 
    fontSize:16, color:'grey'
  }
});
