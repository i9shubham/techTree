import axios from 'axios';

export const fetchData = async (path) => {
    return await axios({
        url: `/user/getTree/${path}`,
        method: 'GET',
        responseType: 'json',
    });
};

export const findUserName = async (username) => {
    return await axios({
        url: `/user/checkUserName/${username}`,
        method: 'GET',
        // responseType: 'json',
    });
};

export const registerUser = async (details) => {
    return await axios({
        url: `/user/signup`,
        method: 'POST',
        data: details,
    });
};
