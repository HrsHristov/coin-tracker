import * as request from "../lib/request";

// const baseUrl = "http://localhost:3030/data/portfolio";
const baseUrl = "http://localhost:3030/jsonstore/portfolio";

export const getAllEntries = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const getOne = async (entryId) => {
    const response = await fetch(`${baseUrl}/${entryId}`);
    const result = await response.json();

    return result;
};

export const create = async (gameData) => {
    const result = await request.post(baseUrl, gameData);

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
