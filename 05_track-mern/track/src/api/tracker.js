import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://90c2-59-168-20-84.jp.ngrok.io',
  headers: {
    // POINT：ngrok
    // https://stackoverflow.com/questions/73017353/how-to-bypass-ngrok-browser-warning
    'ngrok-skip-browser-warning': '12345',
  },
});

// POINT：axios, interceptors
instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
