import axios from 'axios';

const main = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/`,
});
const authInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/`,
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
