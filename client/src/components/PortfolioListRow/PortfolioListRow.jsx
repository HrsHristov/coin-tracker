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
    price,
    quantity,
    onDeleteClick,
    onInfoClick,
}) {
    const [coinInfo, setCoinInfo] = useState({});

    console.log(coinInfo);

    useEffect(() => {
        coinsAPI
            .getCoinInfo(uuid)
            .then((result) => setCoinInfo(result))
            .catch((err) => console.log(err));
    }, [uuid]);

    const infoClickHandler = () => {
        onInfoClick(_id);
    };

    const deleteClickHandler = () => {
        onDeleteClick(_id);
    };

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
                <div>${formatPrice(coinInfo.data.coin.price.toString())}</div>
                {coinInfo.data.coin.change > 0 ? (
                    <div className="up">+{coinInfo.data.coin.change}%</div>
                ) : (
                    <div className="down">{coinInfo.data.coin.change}%</div>
                )}
                <div className="d-flex-column gap-1 text-end">
                    <div>${calculateHoldings(price, quantity)}</div>
                    <div>
                        {quantity} {symbol}
                    </div>
                </div>
                <div>${formatPrice(price.toString())}</div>
                <div className="d-flex-column gap-1 text-end">
                    <div>
                        $
                        {calculatePNL(
                            coinInfo.data.coin.price,
                            price,
                            quantity
                        )}
                    </div>

                    {coinInfo.data.coin.price > price ? (
                        <div className="up">
                            {calculatePNLPercentage(
                                coinInfo.data.coin.price,
                                price
                            )}
                            %
                        </div>
                    ) : (
                        <div className="down">
                            {calculatePNLPercentage(
                                coinInfo.data.coin.price,
                                price
                            )}
                            %
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
