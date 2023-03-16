import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'http://10.1.2.106/:5000',
});
                                                                                  
export default api;