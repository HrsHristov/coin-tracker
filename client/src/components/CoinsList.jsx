import * as coinsAPI from "../APIs/coinsAPI.js";
import { useState, useEffect } from "react";

export default function CoinsList() {
    const [coins, setCoins] = useState([]);

    console.log(coins);

    useEffect(() => {
        coinsAPI
            .getAll()
            .then((result) => setCoins(result))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <div className="coin-row">
                <div>Rank</div>
                <div className="d-flex gap-2 coin-icon-conteiner">
                    <div className="coin-icon"></div>
                    <div className="d-flex-center-content gap-2">
                        <span>Name</span>
                    </div>
                </div>
                <div>Price</div>
                <div>24h Change</div>
                <div>MarketCap</div>
                <div>24h Volume</div>
            </div>
            {coins.map((coin) => (
                <>
                    <div className="divider"></div>
                    <div className="coin-row">
                        <div>{coin.rank}</div>
                        <div className="d-flex gap-2 coin-icon-conteiner">
                            <div className="coin-icon">
                                <img className="img" src={coin.iconUrl} />
                            </div>
                            <div className="d-flex-center-content gap-2">
                                <span>{coin.name}</span>
                                <span>{coin.symbol}</span>
                            </div>
                        </div>
                        <div>${Math.round(coin.price * 100) / 100}</div>
                        <div>{coin.change}%</div>
                        <div>{coin.marketCap}</div>
                        <div>{coin["24hVolume"]}</div>
                    </div>
                </>
            ))}
        </>
    );
}
