import * as coinsService from "../../servies/coinsService.js";
import { useState, useEffect } from "react";

import ListHeader from "../ListHeader/ListHeader.jsx";
import CoinListRow from "../CoinListRow/CoinListRow.jsx";

export default function CoinsList() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        coinsService
            .getAll()
            .then((result) => setCoins(result))
            .catch((err) => console.log(err));
    }, []);

    return (
        <table>
            <ListHeader title="coins" />
            {coins.map((coin) => (
                <CoinListRow
                    key={coin.rank}
                    {...coin}
                    volume={coin["24hVolume"]}
                />
            ))}
        </table>
    );
}
