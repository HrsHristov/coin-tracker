import { useState, useEffect } from "react";
import { formatNumber, formatPrice } from "../../utils/formatUtils.js";
import {
    calculateHoldings,
    calculatePNL,
    calculatePNLPercentage,
} from "../../utils/calculations.js";

import * as portfolioAPI from "../../APIs/portfolioAPI.js";

import plus from "../../assets/plus.png";
import binIcon from "../../assets/bin.png";
import infoIcon from "../../assets/info.png";

export default function PortfolioListRow({ uuid, price, quantity }) {
    const [coinInfo, setCoinInfo] = useState([]);

    useEffect(() => {
        portfolioAPI
            .getCoinInfo(uuid)
            .then((result) => setCoinInfo(result))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {coinInfo.map((info) => (
                <div key={uuid}>
                    <div className="divider"></div>
                    <div className="coin-row">
                        <div className="d-flex gap-2 coin-icon-conteiner">
                            <div className="coin-icon">
                                <img className="img" src={info.iconUrl} />
                            </div>
                            <div className="d-flex-center-content gap-2">
                                <span>{info.name}</span>
                                <span>{info.symbol}</span>
                            </div>
                        </div>
                        <div>${formatPrice(info.price)}</div>
                        {info.change > 0 ? (
                            <div className="up">+{info.change}%</div>
                        ) : (
                            <div className="down">{info.change}%</div>
                        )}
                        <div className="d-flex-column gap-1 text-end">
                            <div>${calculateHoldings(price, quantity)}</div>
                            <div>
                                {quantity} {info.symbol}
                            </div>
                        </div>
                        <div>${formatPrice(price.toString())}</div>
                        <div className="d-flex-column gap-1 text-end">
                            <div>
                                ${calculatePNL(info.price, price, quantity)}
                            </div>

                            {info.price > price ? (
                                <div className="up">
                                    {calculatePNLPercentage(info.price, price)}%
                                </div>
                            ) : (
                                <div className="down">
                                    {calculatePNLPercentage(info.price, price)}%
                                </div>
                            )}
                        </div>
                        <div className="d-flex-end-content gap-2">
                            <button type="submit" className="button-action">
                                <img src={infoIcon} width="16" height="16" />
                            </button>
                            <button type="submit" className="button-action">
                                <img src={binIcon} width="18" height="18" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
