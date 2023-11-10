import * as coinsAPI from "../APIs/coinsAPI.js";
import { useState, useEffect } from "react";
import { numericFormatter } from "react-number-format";

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
                <div>Rank #</div>
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
                <div>BTC Price</div>
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
                        <div>${Number(coin.price).toFixed(2)}</div>
                        {coin.change > 0 ? (
                            <div className="up">+{coin.change}%</div>
                        ) : (
                            <div className="down">{coin.change}%</div>
                        )}
                        <div>
                            {numericFormatter(coin.marketCap, {
                                thousandSeparator: true,
                                decimalScale: 0,
                            })}
                        </div>
                        <div>
                            {numericFormatter(coin["24hVolume"], {
                                thousandSeparator: true,
                                decimalScale: 0,
                            })}
                        </div>
                        <div>{Number(coin.btcPrice).toFixed(10)}</div>
                    </div>
                </>
            ))}
        </>
    );
}
