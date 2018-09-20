import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:2700',
});

export default instance;

