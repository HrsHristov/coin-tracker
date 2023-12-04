import * as coinsService from "../../services/coinsService.js";
import { useState, useEffect } from "react";

import ListHeader from "../ListHeader/ListHeader";
import CoinListRow from "../CoinListRow/CoinListRow";

const CoinsList = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        coinsService
            .getAll()
            .then((result) => setCoins(result))
            .catch((err) => console.log(err));
    }, []);

    return (
        <table>
            <thead>
                <ListHeader title="coins" />
            </thead>
            {coins.map((coin) => (
                <CoinListRow
                    key={coin.rank}
                    {...coin}
                    volume={coin["24hVolume"]}
                />
            ))}
        </table>
    );
};

export default CoinsList;
