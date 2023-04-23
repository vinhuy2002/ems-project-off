import React from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableHighlight } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const HomeReport = () => {
    return(
        <View>
            <Text>Hello</Text>
        </View>

    );
}
const ReportIndex = () => {
    return (
        <Stack.Navigator initialRouteName="Report">
            <Stack.Screen name="Report" component={HomeReport} />
        </Stack.Navigator>
    );
}


export default ReportIndex;