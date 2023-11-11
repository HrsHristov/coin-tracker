import * as coinsAPI from "../APIs/coinsAPI.js";
import { useState, useEffect } from "react";
import { numericFormatter } from "react-number-format";

export default function CoinsList() {
    const [coins, setCoins] = useState([]);

    // console.log(coins);

    useEffect(() => {
        coinsAPI
            .getAll()
            .then((result) => setCoins(result))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {coins.map((coin) => (
                <>
                    <div className="divider"></div>
                    <div className="coin-row" key={coin.rank}>
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
                        <div className="d-flex-column gap-1">
                            <div>
                                {numericFormatter(coin["24hVolume"], {
                                    thousandSeparator: true,
                                    decimalScale: 0,
                                })}
                            </div>
                            <div>
                                {Math.round(
                                    Number(coin["24hVolume"] / coin.price)
                                )}
                            </div>
                        </div>
                        <div>{Number(coin.btcPrice).toFixed(10)}</div>
                    </div>
                </>
            ))}
        </>
    );
}
