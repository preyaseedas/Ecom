import React from "react"; 
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import PreviewButton from "../common/PreviewButton";
const MyOrder = () =>{
    return(
        <View>
        <View>
            <PreviewButton/>
        <Text>My order</Text></View>
        <View>
           <Button>Preview</Button>
           <Button>Upcoming</Button>
        </View>
        <FlatList>
            
        </FlatList>
        </View>
    );
};