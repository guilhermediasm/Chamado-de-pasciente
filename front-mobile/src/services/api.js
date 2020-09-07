
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.31:3081/'
})

export default api;