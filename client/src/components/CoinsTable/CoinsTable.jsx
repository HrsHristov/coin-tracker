import * as coinsService from "../../services/coinsService.js";
import { useState, useEffect } from "react";

import TableHeader from "../TableHeader/TableHeader";
import CoinTableRow from "../CoinTableRow/CoinTableRow";

const CoinsTable = () => {
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
                <TableHeader title="coins" />
            </thead>
            {coins.map((coin) => (
                <CoinTableRow
                    key={coin.rank}
                    {...coin}
                    volume={coin["24hVolume"]}
                />
            ))}
        </table>
    );
};

export default CoinsTable;
