import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com", // Replace with your API base URL
})

export default api