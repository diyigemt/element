import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8001',
    timeout: 5000
  });

  instance.interceptors.request.use(config => {
    return config;
  });

  instance.interceptors.response.use(res => {
    return res.data;
  });
  return instance(config);
}