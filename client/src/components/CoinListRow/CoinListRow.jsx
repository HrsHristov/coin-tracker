import { Link } from "react-router-dom";

import { formatNumber, formatPrice } from "../../utils/formatUtils";

import Button from "../Button/Button";
import Path from "../../paths";

const CoinListRow = ({
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
}) => {
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
                    <Link to={`${Path.Coins}/${uuid}`}>
                        <Button primary>Details</Button>
                    </Link>
                </td>
            </tr>
        </tbody>
    );
};

export default CoinListRow;
