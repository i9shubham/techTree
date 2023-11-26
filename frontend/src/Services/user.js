import { api } from './api';

export const fetchData = async (path) => {
    return await api({
        url: `/user/getTree/${path}`,
        method: 'GET',
        responseType: 'json',
    });
};

export const findUserName = async (username) => {
    return await api({
        url: `/user/checkUserName/${username}`,
        method: 'GET',
        responseType: 'json',
    });
};

export const registerUser = async (details) => {
    return await api({
        url: `/user/signup`,
        method: 'POST',
        data: details,
        responseType: 'json',
    });
};
