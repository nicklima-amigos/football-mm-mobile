import axios from "axios";

const client = axios.create({
  baseURL: "http://192.168.15.6:3000/api",
});

export default client;
