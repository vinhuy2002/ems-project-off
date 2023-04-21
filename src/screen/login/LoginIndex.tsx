import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import styles from './styles';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
    authActions,
    selectError,
    selectIsLoggedIn,
    selectUserInfo,
} from './authSlice';



const LoginIndex = ({ navigation }: any) => {
    const dipatch = useAppDispatch();
    const isLogged = useAppSelector(selectIsLoggedIn);
    const error = useAppSelector(selectError);
    const userInfo = useAppSelector(selectUserInfo);
    const [email, onChangeEmail] = useState('');
    const [matKhau, onChangeMatKhau] = useState('');

    const checkEmail = (emailCh: string) => {
        if (emailCh) { return true; }
        return false;
    }

    const checkPass = (passCh: string) => {
        if (passCh) { return true; }
        return false;
    }

    useEffect(() => {
        if (isLogged) {
            navigation.navigate('Register');
        }
    }, [isLogged, userInfo]);

    const handlerLogin = async () => {
        navigation.navigate('Home Page');
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