import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000
  });

  instance.interceptors.request.use(config => {
    return config;
  });

  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    if (typeof err.response === 'undefined') return Promise.reject('network error');
    else return Promise.reject(err.response.status);
  });
  return instance(config);
}