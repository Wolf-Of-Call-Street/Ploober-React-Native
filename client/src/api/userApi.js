import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({

<<<<<<< HEAD
  baseURL: 'http://5151fb3bc1f0.ngrok.io',
=======
  baseURL: 'http://5ff7c48c7c59.ngrok.io'
>>>>>>> bbe4d3a9ac00978f35b89b2a97380b154a6fa45f

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