import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  bodyURL: 'http://127.0.0.1:4040' //ngrok url
});

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