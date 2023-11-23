import axios from "axios";
axios.defaults.withCredentials = true;
export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_VERCEL_URL + "/api",
  headers: { "content-type": "application/json" },
});
