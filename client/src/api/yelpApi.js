import axios from 'axios';
import config from './apiConfig.json';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${config.yelpAPI}`
  }
});