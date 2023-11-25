import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_VERCEL_URL + "/api",
  headers: { "content-type": "application/json" },
});
