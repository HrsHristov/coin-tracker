import { Link } from "react-router-dom";

import { formatNumber, formatPrice } from "../../utils/formatUtils.js";
import Button from "../Button/Button.jsx";

export default function CoinListRow({
    rank,
    iconUrl,
    name,
    symbol,
    change,
    price,
    marketCap,
    volume,
    btcPrice,
    uuid,
}) {
    const priceFormatted = formatPrice(price);
    const marketCapFormatted = formatNumber(marketCap);
    const volumeFormatted = formatNumber(volume);
    const btcPriceFormatted = Number(btcPrice).toFixed(5);

    return (
        <tbody>
            <tr>
                <td>{rank}</td>
                <td>
                    <div className="coin-icon">
                        <img className="img" src={iconUrl} />
                        <span>
                            {name} ({symbol})
                        </span>
                    </div>
                </td>
                <td>{priceFormatted}</td>
                <td>
                    {change > 0 ? (
                        <div className="up">+{change}%</div>
                    ) : (
                        <div className="down">{change}%</div>
                    )}
                </td>
                <td>${marketCapFormatted}</td>
                <td>${volumeFormatted}</td>
                <td>{btcPriceFormatted}</td>
                <td>
                    <Link to={`/coins/${uuid}`}>
                        <Button primary>Details</Button>
                    </Link>
                </td>
            </tr>
        </tbody>
    );

    // return (
    //     <>
    //         <div className="divider"></div>
    //         <div className="coin-row coin-list">
    //             <div className="rank">{rank}</div>
    //             <div className="d-flex gap-2 coin-icon-conteiner">
    //                 <div className="coin-icon">
    //                     <img className="img" src={iconUrl} />
    //                 </div>
    //                 <div className="d-flex-center-content gap-2">
    //                     <span>{name}</span>
    //                     <span>{symbol}</span>
    //                 </div>
    //             </div>
    //             <div className="justify-content-end">{formatPrice(price)}</div>
    //             {change > 0 ? (
    //                 <div className="up justify-content-end">+{change}%</div>
    //             ) : (
    //                 <div className="down justify-content-end">{change}%</div>
    //             )}
    //             <div className="justify-content-end">
    //                 ${formatNumber(marketCap)}
    //             </div>
    //             <div className="d-flex-column gap-1 justify-content-end align-items-end">
    //                 <div>${formatNumber(volume)}</div>
    //                 <div>{`${formatNumber(volume, price)} ${symbol}`}</div>
    //             </div>
    //             <div className="justify-content-end">
    //                 {Number(btcPrice).toFixed(5)}
    //             </div>
    //         </div>
    //     </>
    // );
}
