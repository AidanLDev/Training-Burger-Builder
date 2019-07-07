import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test-3e15a.firebaseio.com/'
});

export default instance;