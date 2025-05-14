import axios from 'axios'


export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001', 
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});
