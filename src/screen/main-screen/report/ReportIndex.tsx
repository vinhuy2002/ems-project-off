import React from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableHighlight } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const TopTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export const A2 = () => {
    return (
        <View>
            <Text>This is report setting</Text>
        </View>
    );
}
export const A1 = () => {
    return (
        <View>
            <Text>This is Home setting</Text>
        </View>
    );
}

const ReportIndex = () => {
    return (
            <TopTab.Navigator>
                <TopTab.Screen name="Thời gian" component={A1} />
                <TopTab.Screen name="Thiết bị" component={A2} />
            </TopTab.Navigator>
    );
}



export default ReportIndex;