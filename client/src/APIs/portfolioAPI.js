const baseUrl = "http://localhost:3030/jsonstore/";

export const getAllEntries = async () => {
    const response = await fetch(`${baseUrl}/portfolio`);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

// export const getOneCoin = async (uuid) => {
//     const response = await fetch(
//         "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history"
//     );
//     const result = await response.json();

//     return result;
// };

export const getCurrentPrice = async (uuid) => {
    const url = `https://coinranking1.p.rapidapi.com/coin/${uuid}/price`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "bc00d31b19mshd31ac5eb9c9811ap1bcc72jsn4e9b00fd6833",
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    const data = Object.values(result.data);

    console.log(data);

    return data;
};

// export const create = async (data) => {
//     const body = {
//         type: data.type,
//         coinId: data.coinId,
//         quanity: data.quantity,
//         pricePer: data.pricePer,
//         fee: data.fee,
//         note: data.note,
//     };

//     const response = await fetch(baseUrl, {
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

// export const remove = async (entryId) => {
//     const response = await fetch(`${baseUrl}/${entryId}`, { method: "DELETE" });

//     const result = await response.json();

//     return result;
// };
