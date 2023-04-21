import axios, {AxiosResponse,AxiosRequestConfig} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginResponse } from '../models/common';

const urlChange = 'http://192.168.1.10:9998/';

const axiosClient = axios.create({
  baseURL: urlChange,
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json',
  },
});

const updateLocalAccessToken = (res: LoginResponse) => {
  AsyncStorage.setItem('access_token', res.token);
  AsyncStorage.setItem('refresh_token', res.refresh_token);
};

const getLocalRefreshToken = () => {
  const token = AsyncStorage.getItem('refresh_token');
  return token;
};


// Add a request interceptor
axiosClient.interceptors.request.use(
  async function (config: any) {
    // Do something before request is sent
    const token = await AsyncStorage.getItem('access_token');
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  async function (error) {
    const originalConfig = error.config;
    if (error.response.status === 401) {
      try {
        const result = await getLocalRefreshToken();
        const url = `${urlChange}api/auth/token`;
        const rs: LoginResponse = await axios.post(url, {
          refresh_token: result,
          
        });
        updateLocalAccessToken(rs);
        return axiosClient(originalConfig);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }

    return Promise.reject(error);
  },
);
export default axiosClient;