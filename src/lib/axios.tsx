import axios from 'axios';
import Cookies from 'js-cookie';

// Create a global Axios instance
const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_APP_URL}`, // Your Laravel API URL
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    
  },
});

// Add a request interceptor to attach CSRF token to every request
axiosInstance.interceptors.request.use(async (config) => {
  // Fetch CSRF token from cookies (if already set)
  const csrfToken = Cookies.get('XSRF-TOKEN');

  // If no CSRF token exists, fetch it first (for initial requests)
  if (!csrfToken) {
    await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/sanctum/csrf-cookie`, {
      withCredentials: true,
    });
    
  }

  // Attach CSRF token to headers
  config.headers['X-XSRF-TOKEN'] = Cookies.get('XSRF-TOKEN');
  console.log('xsrf : ', Cookies.get('laravel_session'));
  

  return config;
});

export default axiosInstance;