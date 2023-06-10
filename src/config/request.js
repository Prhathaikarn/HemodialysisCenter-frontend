import axios from 'axios';
import { getAccessToken } from '../utils/localstorage';

const BASE_API = 'http://localhost:8888';

const request = axios.create({
  baseURL: BASE_API,
});

request.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default request;
