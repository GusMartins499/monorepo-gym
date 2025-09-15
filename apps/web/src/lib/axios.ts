import axios from "axios";
import { cookies } from "next/headers";

export const api = axios.create({
  baseURL: "http://localhost:3333",
  withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
  return config;
});