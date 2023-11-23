import plus from "../../assets/plus.png";
import binIcon from "../../assets/bin.png";
import infoIcon from "../../assets/info.png";

import { useState, useEffect } from "react";
import { formatNumber, formatPrice } from "../../utils/formatUtils.js";
import {
    calculateHoldings,
    calculatePNL,
    calculatePNLPercentage,
} from "../../utils/calculationsUtils.js";

import * as coinsAPI from "../../APIs/coinsAPI.js";

export default function PortfolioListRow({
    _id,
    uuid,
    name,
    symbol,
    iconUrl,
    buyPrice,
    sellPrice,
    quantity,
    onDeleteClick,
    onInfoClick,
}) {
    const [coinInfo, setCoinInfo] = useState(null);

    console.log(coinInfo);

    useEffect(() => {
        coinsAPI
            .getCoinInfo(uuid)
            .then((result) => setCoinInfo(result))
            .catch((err) => console.log(err));
    }, []);

    const infoClickHandler = () => {
        onInfoClick(_id);
    };

    const deleteClickHandler = () => {
        onDeleteClick(_id);
    };

    if (!coinInfo) {
        return <div>loading....</div>;
    }

    const currentPrice = coinInfo.data.coin.price;
    const priceChange = coinInfo.data.coin.change;

    return (
        <>
            <div className="divider"></div>
            <div className="coin-row">
                <div className="d-flex gap-2 coin-icon-conteiner">
                    <div className="coin-icon">
                        <img className="img" src={iconUrl} />
                    </div>
                    <div className="d-flex-center-content gap-2">
                        <span>{name}</span>
                        <span>{symbol}</span>
                    </div>
                </div>
                <div>${formatPrice(currentPrice.toString())}</div>
                {coinInfo.data.coin.change > 0 ? (
                    <div className="up">+{priceChange}%</div>
                ) : (
                    <div className="down">{priceChange}%</div>
                )}
                <div className="d-flex-column gap-1 text-end">
                    <div>${calculateHoldings(buyPrice, quantity)}</div>
                    <div>
                        {quantity} {symbol}
                    </div>
                </div>
                <div>${formatPrice(buyPrice.toString())}</div>
                <div className="d-flex-column gap-1 text-end">
                    <div>${calculatePNL(currentPrice, buyPrice, quantity)}</div>

                    {currentPrice > buyPrice ? (
                        <div className="up">
                            {calculatePNLPercentage(currentPrice, buyPrice)}%
                        </div>
                    ) : (
                        <div className="down">
                            {calculatePNLPercentage(currentPrice, buyPrice)}%
                        </div>
                    )}
                </div>
                <div className="d-flex-end-content gap-2">
                    <button
                        type="submit"
                        className="button-action"
                        onClick={infoClickHandler}
                    >
                        <img src={infoIcon} width="16" height="16" />
                    </button>
                    <button
                        type="submit"
                        className="button-action"
                        onClick={deleteClickHandler}
                    >
                        <img src={binIcon} width="18" height="18" />
                    </button>
                </div>
            </div>
        </>
    );
}
