import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:2700',
});

export default instance;

