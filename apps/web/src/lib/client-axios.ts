'use client'

import axios from "axios";

export const clientAPI = axios.create({
  baseURL: "http://localhost:3333",
  withCredentials: true,
});

clientAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
});