// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Later replace with actual API base URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // optional
});

// Optional: Add interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    // Example: Add token dynamically
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Example: global error handling
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
