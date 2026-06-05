import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Ensure this matches your backend port
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercept requests and attach the JWT token
axiosInstance.interceptors.request.use(
  (config) => {
    // We will store the token in localStorage upon successful login
    const token = localStorage.getItem('biznest_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;