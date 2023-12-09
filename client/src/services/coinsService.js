export const getAll = async () => {
    const url =
        "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
    const options = {
        method: "GET",
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
    };

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
};
