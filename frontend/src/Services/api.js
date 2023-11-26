import axios from 'axios';
const serverUrl = process.env.REACT_APP_SERVER_URL;

export const api = axios.create({
    baseURL: serverUrl,
    timeout: 5000,
});