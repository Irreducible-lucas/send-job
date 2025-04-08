import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:3000/api/",
  baseURL: "https://syncapi.onrender.com/api/",
});

export default instance;
