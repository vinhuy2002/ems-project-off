import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import { LoginResponse } from '../models/common';


const urlChange = 'http://192.168.1.10:9998/';

const axiosClient = axios.create({
    baseURL: urlChange,
    headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
        
    },
});

axiosClient.interceptors.request.use(
    async function(config) {
        const access_token = await EncryptedStorage.getItem('access_token');
        config.headers.Authorization = 'Bearer ' + access_token;
        return config;
}, function(error) {
    return Promise.reject(error);
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const originalConfig = error.config;
    if (error.response.status === 401) {
      try {
        const result = await EncryptedStorage.getItem('refresh_token');
        const url = `${urlChange}api/auth/token/`;
        const data: LoginResponse = await axios.post(url, {
          refresh_token: result,
          
        });
        await EncryptedStorage.setItem("access_token", data.access_token);
        await EncryptedStorage.setItem("refresh_token", data.refresh_token);
        return axiosClient(originalConfig);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
    return Promise.reject(error);
})

export default axiosClient;