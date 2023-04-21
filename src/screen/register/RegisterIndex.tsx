import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import styles from './styles';

const RegisterIndex = ({ navigation }: any) => {
    const [hoTen, onChangeHoTen] = useState('');
    const [email, onChangeEmail] = useState('');
    const [matKhau, onChangeMatKhau] = useState('');
    const [repMatKhau, onChangeRepMatKhau] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.textCenter}>Energy Management System</Text>
            <View style={styles.padTop}>
                <Text>Họ và tên:</Text>
                <TextInput value={hoTen} onChangeText={onChangeHoTen} style={styles.box} />
            </View>
            <View style={styles.padTop}>
                <Text>Email:</Text>
                <TextInput value={email} onChangeText={onChangeEmail} style={styles.box} />
            </View>
            <View style={styles.padTop}>
                <Text>Mật khẩu:</Text>
                <TextInput value={matKhau} onChangeText={onChangeMatKhau} secureTextEntry={true} style={styles.box} />
            </View>
            <View style={styles.padTop}>
                <Text>Nhập lại mật khẩu:</Text>
                <TextInput value={repMatKhau} onChangeText={onChangeRepMatKhau} secureTextEntry={true} style={styles.box} />
            </View>
            <TouchableHighlight style={[styles.alignItems, styles.padTop]} >
                <View style={styles.button}>
                    <Text style={styles.colorWhite}>Đăng ký</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.bottom}>
                <Text style={styles.textCenter}>Bạn đã có tài khoản? <Text onPress={() => navigation.navigate('Login')}>Đăng nhập ngay</Text>
                </Text>
            </View>
        </View>
    );
}

export default RegisterIndex;