import axiosClient from "./axiosClient";
import { Account, LoginResponse } from "../models/common";
import EncryptedStorage from 'react-native-encrypted-storage';

export const handleLogin = async(params: Account) =>{
    try {
        const res = await axiosClient.post('api/auth/login', params);
        await EncryptedStorage.setItem("access_token", (res.data.access_token));
        await EncryptedStorage.setItem("refresh_token", (res.data.refresh_token));
    } catch (error) {
        await EncryptedStorage.clear();
        console.log("Tài khoản hoặc mật khẩu không chính xác");
    }
}

export const userInfo = async () => {
    try {
        const res = await axiosClient.get('api/auth/user_info');
        await EncryptedStorage.setItem('user_info', JSON.stringify(res.data));
    } catch(error){
        console.log(error);
    }
}
