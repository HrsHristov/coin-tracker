import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as coinsService from "../../services/coinsService";
import { formatNumber, formatPrice } from "../../utils/formatUtils";

import Card from "../Card/Card";
import LineChart from "../LineChart/LineChart";

const CoinDetails = () => {
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

    const dataSet = coinInfo.data.coin.sparkline;

    return (
        <>
            <div className="row">
                <div className="col-4">
                    <Card>
                        <header className="mb-4">
                            <div className="coin-icon row mb-4">
                                <div className="col-6 flex items-center">
                                    <img className="thumbnail" src={iconUrl} />
                                    <h2 className="ml-4 text-md">
                                        <strong>{name}</strong>
                                    </h2>
                                </div>
                                <div className="col-6 text-right">
                                    <strong className="text-lg">
                                        ${price}
                                    </strong>
                                </div>
                            </div>

                            <p>{description}</p>
                        </header>
                        <main>
                            <table>
                                <tr>
                                    <td>Volume 24h</td>
                                    <td>
                                        <p>{volume}</p>
                                        <p className="up">
                                            {change > 0 ? (
                                                <div className="up">
                                                    +{change}%
                                                </div>
                                            ) : (
                                                <div className="down">
                                                    {change}%
                                                </div>
                                            )}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>All Time High</h5>
                                    </td>
                                    <td>
                                        <p>{ath}</p>
                                        <p>On Date: {athDate}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>MarketCap</h5>
                                    </td>
                                    <td>
                                        <p>{marketCap}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>FullyDilutedMarketCap</h5>
                                    </td>
                                    <td>
                                        <p>{fullyDilutedMarketCap}</p>
                                    </td>
                                </tr>
                            </table>
                        </main>
                    </Card>
                </div>
                <div className="col-8">
                    <Card>
                        <LineChart dataSet={dataSet} />
                    </Card>
                </div>
            </div>
        </>
    );
};

export default CoinDetails;
