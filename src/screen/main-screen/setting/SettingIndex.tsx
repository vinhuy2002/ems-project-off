import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity } from "react-native";
import { ApiTest } from "../../../api/testApi";
import axios from "axios";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "./styles";
import { Card } from "@rneui/base";
import EncryptedStorage from 'react-native-encrypted-storage';

interface assetID {
    assetID: string;
};

const Stack = createNativeStackNavigator();

const CustomText = (props: any) => {
    return (
        <Text style={[styles.text, styles.padLeft, {color: 'red'}]}>
            {props.children}
        </Text>
    );
}

const BiggerText = (props:any)=> {
    return (
        <Text style={[styles.biggerText, {marginLeft: 30, marginTop: 20, marginBottom: 20}]}>
            {props.children}
        </Text>
    )
}


const SettingComp = ({navigation}: any) => {
    const logOut = async() => {
        await EncryptedStorage.clear();
        await navigation.navigate('Login');
    }
    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
        <View>
            {/* <BiggerText>Xin chào!</BiggerText> */}
        </View>
        <TouchableOpacity onPress={() => logOut()}>
            <Card containerStyle={{ margin: 0 }}>
                <CustomText>Đăng xuất</CustomText>
            </Card>
        </TouchableOpacity>
        </View>
    );
}

const SettingIndex = () => {
    // const [data1, getData1] = useState([]);
    // useEffect(
    //     () => {
    //         const d1 = async() =>{
    //             try {
    //                 const res = await axios.get('https://retoolapi.dev/2tGosB/data');
    //                 getData1(res.data);
    //             } catch (error) {

    //             }
    //         }
    //         d1();
    //     }
    //     ,[getData1]);
    // console.log(data1.length);
    return (
        <Stack.Navigator initialRouteName="Setting">
            <Stack.Screen name="Setting" component={SettingComp} />
        </Stack.Navigator>
    );
}

export default SettingIndex;