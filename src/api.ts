import axios from 'axios';

const api = axios.create({
  // baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    // Retrieve token from localStorage or another storage mechanism
    const token = localStorage.getItem('token');

    // If token exists, add it to the headers
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors globally
// api.interceptors.response.use(
//   (response) => {
//     // Any status code that falls within the range of 2xx causes this function to trigger
//     return response;
//   },
//   (error) => {
//     // Handle response errors
//     if (error.response && (error.response.status === 401 || error.response.status==403)) {
//       // Handle unauthorized errors (e.g., redirect to login)
//       console.error('Unauthorized, please log in again');
//       alert("Your session has expired! Login again");
//       localStorage.clear();
//       window.open('/');
//     } else {
//       console.error('An error occurred:', error.message);
//     }

//     return Promise.reject(error);
//   }
// );

export default api;

//  http://localhost:3000/