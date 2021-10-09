import axios from "axios";

const token = localStorage.getItem("token");

let axiosAuth = axios.create({
  baseURL: "http://localhost:5000/journals/",
  headers: {
    Authorization: token ? `Bearer ${token}` : "olqlq",
    // "Access-Control-Allow-Origin": "*",
    // "Content-Type": "application/json",
    credentials: "same-origin",
  },
  withCredentials: true,
});

export default axiosAuth;
