import React from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableHighlight } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const HomeAlert = () => {
    return(
        <View>
            <Text>Hello</Text>
        </View>

    );
}
const AlertIndex = () => {
    return (
        <Stack.Navigator initialRouteName="Alert">
            <Stack.Screen name="Alert" component={HomeAlert} />
        </Stack.Navigator>
    );
}


export default AlertIndex;