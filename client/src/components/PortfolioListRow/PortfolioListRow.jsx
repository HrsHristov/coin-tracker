import { useState, useEffect } from "react";

import { formatNumber, formatPrice } from "../../utils/formatUtils.js";

import DeleteEntryModal from "../Modals/DeleteEntryModal/DeleteEntryModal.jsx";
import EntryInfoModal from "../Modals/EntryInfoModal/EntryInfoModal.jsx";

import {
    calculateHoldings,
    calculatePNL,
    calculatePNLPercentage,
} from "../../utils/calculationsUtils.js";

import * as coinsService from "../../services/coinsService.js";
import Button from "../Button/Button.jsx";

const PortfolioListRow = ({ _id, uuid, price, quantity, handleEntries }) => {
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

    console.log(coinInfo);

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
            {showDelete && (
                <DeleteEntryModal
                    onClose={() => setShowDelete(false)}
                    onDelete={() => handleEntries(_id)}
                />
            )}

            {showInfo && (
                <EntryInfoModal
                    onClose={() => setShowInfo(false)}
                    entryId={entryInfoClickHandler}
                />
            )}
            <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        <div className="coin-icon">
                            <img className="img" src={iconUrl} />
                            <span>{name}</span>
                            <span>{symbol}</span>
                        </div>
                    </td>
                    <td>${formatPrice(currentPrice.toString())}</td>
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
                    <td>${formatPrice(price.toString())}</td>
                    <td>
                        <div>${pnl}</div>

                        {currentPrice > price ? (
                            <div className="up">{pnlPercent}%</div>
                        ) : (
                            <div className="down">{pnlPercent}%</div>
                        )}
                    </td>
                    <td>
                        <Button primary onClick={entryInfoClickHandler}>
                            Info
                        </Button>
                        <Button primary>Edit</Button>
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
