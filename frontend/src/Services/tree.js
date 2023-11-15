import axios from "axios";

export const createTree = async(username, data) => {
    return await axios({
        url: `/user/createTree/${username}`,
        method: "PUT",
        data: data,
    });
}