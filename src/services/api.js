import axios from "axios";

const api = axios.create({
  baseURL: 'http://172.25.4.17:3333',
});

export default api;
