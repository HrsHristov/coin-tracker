import { useState, useEffect } from "react";

import { formatPrice } from "../../utils/formatUtils";
import * as coinsService from "../../services/coinsService";
import {
    calculateHoldings,
    calculatePNL,
    calculatePNLPercentage,
} from "../../utils/calculationsUtils";

import DeleteModal from "../Modals/DeleteModal/DeleteModal";
import InfoModal from "../Modals/InfoModal/InfoModal";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const PortfolioListRow = ({
    _id,
    type,
    uuid,
    price,
    quantity,
    index,
    handleEntries,
}) => {
    const [coinInfo, setCoinInfo] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        coinsService
            .getCoinInfo(uuid)
            .then((result) => setCoinInfo(result))
            .catch((err) => console.log(err));
    }, []);

    const entryInfoClickHandler = () => {
        setShowInfo(true);
    };

    const deleteEntryClickHandler = () => {
        setShowDelete(true);
    };

    if (!coinInfo) {
        return <div>loading....</div>;
    }

    const iconUrl = coinInfo?.data?.coin?.iconUrl;
    const name = coinInfo?.data?.coin?.name;
    const symbol = coinInfo?.data?.coin?.symbol;

    const currentPrice = coinInfo?.data?.coin?.price;
    const priceChange = coinInfo?.data?.coin?.change;
    const change = coinInfo?.data?.coin?.change;

    const holdings = calculateHoldings(price, quantity);
    const pnl = calculatePNL(currentPrice, price, quantity);
    const pnlPercent = calculatePNLPercentage(currentPrice, price);

    return (
        <>
            {showInfo && (
                <InfoModal onClose={() => setShowInfo(false)} entryId={_id} />
            )}

            {showDelete && (
                <DeleteModal
                    onClose={() => setShowDelete(false)}
                    onDelete={() => handleEntries(_id)}
                />
            )}

            <tbody>
                <tr>
                    <td>{++index}</td>

                    <td>
                        <div className="coin-icon">
                            <img className="img" src={iconUrl} />
                            <span>{name}</span>
                            <span>({symbol})</span>
                        </div>
                    </td>
                    <td>${formatPrice(currentPrice?.toString())}</td>
                    <td>
                        {change > 0 ? (
                            <div className="up">+{priceChange}%</div>
                        ) : (
                            <div className="down">{priceChange}%</div>
                        )}
                    </td>
                    <td>
                        <div>${holdings}</div>
                        <div>
                            {quantity} {symbol}
                        </div>
                    </td>
                    <td>${formatPrice(price?.toString())}</td>
                    <td>
                        <div>${pnl}</div>

                        {currentPrice > price ? (
                            <div className="up">{pnlPercent}%</div>
                        ) : (
                            <div className="down">{pnlPercent}%</div>
                        )}
                    </td>
                    <td>{type}</td>
                    <td>
                        <Button primary onClick={entryInfoClickHandler}>
                            Info
                        </Button>
                        <Link to={`/portfolio/${_id}/edit`}>
                            <Button primary>Edit</Button>
                        </Link>
                        <Button primary onClick={deleteEntryClickHandler}>
                            Del
                        </Button>
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default PortfolioListRow;
