import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as coinsService from "../../servies/coinsService";
import { formatNumber, formatPrice } from "../../utils/formatUtils";

import ListWrapper from "../ListWrapper/ListWrapper";

export default function CoinDetails() {
    const [coinInfo, setCoinInfo] = useState(null);
    const { uuid } = useParams();

    useEffect(() => {
        coinsService.getCoinInfo(uuid).then((result) => setCoinInfo(result));
    }, []);

    if (!coinInfo) {
        return <div>loading....</div>;
    }

    const name = coinInfo.data.coin.name;
    const price = formatPrice(coinInfo.data.coin.price);
    const description = coinInfo.data.coin.description;
    const iconUrl = coinInfo.data.coin.iconUrl;

    const volume = formatNumber(coinInfo.data.coin["24hVolume"]);
    const change = coinInfo.data.coin.change;

    const ath = formatNumber(coinInfo.data.coin.allTimeHigh.price);
    const athDate = new Date(
        coinInfo.data.coin.allTimeHigh.timestamp * 1000
    ).toLocaleString();

    const marketCap = formatNumber(coinInfo.data.coin.marketCap);
    const fullyDilutedMarketCap = formatNumber(
        coinInfo.data.coin.fullyDilutedMarketCap
    );

    return (
        <ListWrapper>
            {/* Chart section */}
            <div>
                <h1>CHART HERE</h1>
            </div>

            {/* "Header" section with Logo, Name, Price */}
            <div>
                {/* bitcoin logo infront of the name */}
                <div className="coin-icon">
                    <img className="img" src={iconUrl} />
                    <h2>{name}</h2>
                </div>

                <p>${price}</p>
                <p>{description}</p>
            </div>

            {/* Section with  with recent price movements*/}
            <div>
                <div>
                    <h5>Volume 24h</h5>
                    <p>{volume}</p>
                    <p className="up">
                        {change > 0 ? (
                            <div className="up">+{change}%</div>
                        ) : (
                            <div className="down">{change}%</div>
                        )}
                    </p>
                </div>
            </div>

            {/* Section for general coin info */}
            <div>
                <div>
                    <h5>All Time High</h5>
                    <p>{ath}</p>
                    <p>On Date: {athDate}</p>
                </div>

                <div>
                    <p>MarketCap</p>
                    <p>{marketCap}</p>

                    <p>FullyDilutedMarketCap</p>
                    <p>{fullyDilutedMarketCap}</p>
                </div>
            </div>
        </ListWrapper>
    );
}
