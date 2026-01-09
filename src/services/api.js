import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com', // replace with real base URL
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request/response interceptors can be added here

export default instance;
