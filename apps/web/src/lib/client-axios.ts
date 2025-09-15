'use client'

import axios from "axios";

export const clientAPI = axios.create({
  baseURL: "http://localhost:3333",
  withCredentials: true,
});

clientAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  const adminToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyQzI0MjNFLUYzNkItMTQxMC04N0M2LTAwNTdEREY2M0UyRiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc1Nzk2ODQ4MSwiZXhwIjoxNzU4NTczMjgxfQ.UdjUM3Fe6gfgpeS3VREXztt9bU7oBnU5NFaCZ4Cmp4g`
  const professorToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkZGQjE0MzNFLUYzNkItMTQxMC04N0M3LTAwNTdEREY2M0UyRiIsInJvbGUiOiJQUk9GRVNTT1IiLCJpYXQiOjE3NTc5Njg1NzEsImV4cCI6MTc1ODU3MzM3MX0.l4xz2ig5HSfoSFXSCWFgDmloEQlSymZ5QzRWrViVOqI`

  if (token) {
    config.headers.Authorization = `Bearer ${professorToken}`
  }
  return config;
});