import { api } from './api';

export const createTree = async (username, data) => {
    return await api({
        url: `/user/createTree/${username}`,
        method: 'PUT',
        data: data,
    });
};
