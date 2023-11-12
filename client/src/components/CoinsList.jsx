import * as coinsAPI from "../APIs/coinsAPI.js";
import { useState, useEffect } from "react";
import { formatNumber, formatPrice } from "../utils/formatUtils.js";

export default function CoinsList() {
    const [coins, setCoins] = useState([]);

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
                    <div key={coin.rank}>
                        <div className="divider"></div>
                        <div className="coin-row coin-list" key={coin.rank}>
                            <div className="rank">{coin.rank}</div>
                            <div className="d-flex gap-2 coin-icon-conteiner">
                                <div className="coin-icon">
                                    <img className="img" src={coin.iconUrl} />
                                </div>
                                <div className="d-flex-center-content gap-2">
                                    <span>{coin.name}</span>
                                    <span>{coin.symbol}</span>
                                </div>
                            </div>
                            <div className="justify-content-end">
                                {formatPrice(coin.price)}
                            </div>
                            {coin.change > 0 ? (
                                <div className="up justify-content-end">
                                    +{coin.change}%
                                </div>
                            ) : (
                                <div className="down justify-content-end">
                                    {coin.change}%
                                </div>
                            )}
                            <div className="justify-content-end">
                                ${formatNumber(coin.marketCap)}
                            </div>
                            <div className="d-flex-column gap-1 justify-content-end align-items-end">
                                <div>${formatNumber(coin["24hVolume"])}</div>
                                <div>
                                    {`${formatNumber(
                                        coin["24hVolume"],
                                        coin.price
                                    )} ${coin.symbol}`}
                                </div>
                            </div>
                            <div className="justify-content-end">
                                {Number(coin.btcPrice).toFixed(5)}
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </>
    );
}
