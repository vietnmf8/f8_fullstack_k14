import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:4001'
})

export default api