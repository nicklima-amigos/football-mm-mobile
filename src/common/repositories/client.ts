import axios from "axios";

const client = axios.create({
  baseURL: "http://192.168.1.183:3000/api",
});

export default client;
