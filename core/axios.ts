import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  maxBodyLength: Infinity,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
