import axios from 'axios';

export const fetchData = async (path) => {
    return await axios({
        url: `/user/getTree/${path}`,
        method: 'GET',
        responseType: 'json',
    });
};
