import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({

  baseURL: 'http://85c74e102e28.ngrok.io',

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