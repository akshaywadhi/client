import axios from 'axios'


export const axiosInstance = axios.create({
  baseURL: 'https://server-i59g.onrender.com', 
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});
