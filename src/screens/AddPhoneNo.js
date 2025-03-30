import React from "react";
import { Image, StyleSheet, View } from "react-native";
import PreviewButton from "../common/PreviewButton";

import { TextInput } from 'react-native-paper';
import { Text } from "react-native";
const AddPhoneNo= () =>{
    const [text, setText] = React.useState("");
    return(

        <View style={{flex:1, padding:20}}>
            <PreviewButton/>
            <Text>
                Enter your mobile number
            </Text>
            <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />
            <View>
                <Image/>
            </View>
        </View>
    );
};
export default AddPhoneNo;
const styles= StyleSheet.create({

});