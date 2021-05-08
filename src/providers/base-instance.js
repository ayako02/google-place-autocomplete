import axios from 'axios';

// Note: A sample to demonstrate of creating an axios instance to call API
const BaseInstance = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/js',
  headers: {},
});

export default BaseInstance;
