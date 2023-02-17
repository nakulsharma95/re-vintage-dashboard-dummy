import axios from 'axios';

const main = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
const authInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
main.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error)
);

export { main, authInstance };
