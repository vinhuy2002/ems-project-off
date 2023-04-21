import axiosClient from "./axiosClient";
import { Account, UserInfo, LoginResponse } from "../models/common";

const urlApi = 'api/auth'

export const authApi = {
    login(params: Account): Promise<LoginResponse>{
        const url = `http://192.168.1.10:9998/api/auth/login`;
        return axiosClient.post(url, params)
    },
    getAccountInfo(): Promise<UserInfo> {
        const url = `api/user`;
        return axiosClient.get(url);
    },
}