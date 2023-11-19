const baseUrl = "http://localhost:3030/jsonstore/";

export const getAllEntries = async () => {
    const response = await fetch(`${baseUrl}/portfolio`);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const getOne = async (entryId) => {
    const response = await fetch(`${baseUrl}/portfolio/${entryId}`);
    const result = await response.json();

    return result;
};

export const getAllSymbols = async () => {
    const response = await fetch(`${baseUrl}/coins`);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

// export const create = async (data) => {
//     const body = {
//         type: "data.type",
//         coinId: "data.coinId",
//         quanity: "data.quantity",
//         pricePer: "data.pricePer",
//         note: "data.note",
//     };

//     const response = await fetch(`${baseUrl}/portfolio`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body),
//     });

//     const result = await response.json();
//     console.log(result);
//     return result;
// };

export const remove = async (entryId) => {
    const response = await fetch(`${baseUrl}/portfolio/${entryId}`, {
        method: "DELETE",
    });

    const result = await response.json();

    return result;
};
