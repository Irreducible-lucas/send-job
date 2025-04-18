import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../constant";

const instance: AxiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:3000/api/",
  baseURL: BASE_URL,
});

export default instance;
