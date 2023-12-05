import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/portfolio";

export const getAllEntries = async (userId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${userId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const getOne = async (entryId) => {
    const response = await fetch(`${baseUrl}/${entryId}`);
    const result = await response.json();

    return result;
};

export const create = async (data) => {
    const result = await request.post(baseUrl, data);

    console.log(result);

    return result;
};

export const remove = async (entryId) => {
    const response = await fetch(`${baseUrl}/portfolio/${entryId}`, {
        method: "DELETE",
    });

    const result = await response.json();

    return result;
};
