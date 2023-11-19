export const getAll = async () => {
    const url =
        "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
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
    const data = Object.values(result.data.coins);

    return data;
};

export const getCoinInfo = async (uuid) => {
    const url = `https://coinranking1.p.rapidapi.com/coin/${uuid}/`;
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

    // console.log(result);

    return result;
};
