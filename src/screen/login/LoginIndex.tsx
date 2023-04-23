import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableHighlight, Alert, ToastAndroid } from "react-native";
import styles from './styles';
import EncryptedStorage from 'react-native-encrypted-storage';
import { Account } from "../../models/common";
import { handleLogin, userInfo } from "../../api/authApi";
import { Image } from '@rneui/themed';

const LoginIndex = ({ navigation }: any) => {
    const [email, onChangeEmail] = useState('ems_dev@iotmind.vn');
    const [matKhau, onChangeMatKhau] = useState('123456');

    const handlerLogin = async () => {
        await EncryptedStorage.clear();
        let acc: Account = {username: email, password: matKhau};
        await handleLogin(acc);
        await userInfo();
        const user = await EncryptedStorage.getItem('user_info');
        await navigateToHome(user);
    }

    const navigateToHome = async(user: any) =>{
        if (user !== null){
            navigation.navigate('Home Page');
        } else {
            ToastAndroid.showWithGravity('Tài khoản hoặc mật khẩu nhập không chính xác!', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.textCenter, styles.text]}>Energy Management System</Text>
            <View style={styles.padTop}>
                <Text style={styles.text}>Email:</Text>
                <TextInput value={email} onChangeText={text => onChangeEmail(text)} style={[styles.box, styles.text]} />
            </View>
            <View style={styles.padTop}>
                <Text style={styles.text}>Mật khẩu:</Text>
                <TextInput value={matKhau} onChangeText={text => onChangeMatKhau(text)} secureTextEntry={true} style={[styles.box]} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableHighlight style={styles.button} onPress={() => handlerLogin()}>
                    <View>
                        <Text style={styles.textBtn}>Đăng nhập</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default LoginIndex;