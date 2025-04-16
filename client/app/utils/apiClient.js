import axios from 'axios';

/**
 * Base API client for making HTTP requests with authentication
 */
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Add a request interceptor to include the auth token in the headers
 */
apiClient.interceptors.request.use(
  function (config) {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

/**
 * Add a response interceptor to handle authentication errors
 */
apiClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login or clear token)
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        // Redirect to login page if unauthorized
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

/**
 * Helper function to store the authentication token
 * @param {string} token - JWT token
 */
export function setAuthToken(token) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
  }
}

/**
 * Helper function to remove the authentication token
 */
export function removeAuthToken() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
}

/**
 * Helper function to check if user is authenticated
 * @returns {boolean} - Whether the user is authenticated
 */
export function isAuthenticated() {
  if (typeof window !== 'undefined') {
    return !!localStorage.getItem('token');
  }
  return false;
}

export default apiClient; 