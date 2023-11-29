import cross from "../../../assets/cross.png";
import { useEffect, useState } from "react";

import * as portfolioAPI from "../../../services/portfolioService.js";
import {
    calculateHoldings,
    calculatePNL,
    calculatePNLPercentage,
} from "../../../utils/calculationsUtils.js";
import { formatDate } from "../../../utils/dateUtils.js";
import ModalWrapper from "../ModalWrapper.jsx";
import Button from "../../Button/Button.jsx";

export default function EntryInfoModal({ entryId, onClose }) {
    const [entryDetails, setEnetryDetails] = useState({});

    console.log(entryDetails);

    useEffect(() => {
        portfolioAPI.getOne(entryId).then((result) => setEnetryDetails(result));
    }, [entryId]);

    return (
        <ModalWrapper title="Transaction Details">
            <div>
                <span>Type: </span>
                <span>Buy</span>
            </div>
            <div>
                <span>Date: </span>
                <span>{formatDate(entryDetails.date)}</span>
            </div>
            <div>
                <span>Price per coin:</span>
                <span>${entryDetails.price}</span>
            </div>
            <div>
                <span>Quantity: </span>
                <span>{`${entryDetails.quantity} ${entryDetails.symbol}`}</span>
            </div>
            <div>
                <span>Fee: </span>
                <span>{entryDetails.fee}%</span>
            </div>
            <div>
                <span>Total Spent: </span>
                <span>
                    $
                    {calculateHoldings(
                        entryDetails.price,
                        entryDetails.quantity
                    )}
                </span>
            </div>
            <div>
                <span>Note: </span>
                <span>{entryDetails.note}</span>
            </div>
            <Button onClick={onClose}>Close</Button>
        </ModalWrapper>
    );
}
