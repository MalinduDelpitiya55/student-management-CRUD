import axios from "axios";

const BASE_URL = "http://localhost:5174/";

const newRequest = axios.create({
    baseURL: BASE_URL,  
    withCredentials: true,
});

export default newRequest;