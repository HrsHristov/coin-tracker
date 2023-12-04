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

const EntryInfoModal = ({ entryId, onClose }) => {
    const [entryDetails, setEnetryDetails] = useState({});

    console.log(entryDetails);

    useEffect(() => {
        portfolioAPI.getOne(entryId).then((result) => setEnetryDetails(result));
    }, [entryId]);

    return (
        <ModalWrapper title="Transaction Details">
            <table className="mb-4">
                <tbody>
                    <tr>
                        <td>
                            <strong>Type:</strong>
                        </td>
                        <td>Buy</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Date:</strong>
                        </td>
                        <td>{formatDate(entryDetails.date)}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Price per coin:</strong>
                        </td>
                        <td>${entryDetails.price}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Quantity:</strong>
                        </td>
                        <td>{`${entryDetails.quantity} ${entryDetails.symbol}`}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Fee:</strong>
                        </td>
                        <td>${entryDetails.fee}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Total Spent:</strong>
                        </td>
                        <td>
                            $
                            {calculateHoldings(
                                entryDetails.price,
                                entryDetails.quantity
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Note:</strong>
                        </td>
                        <td>{entryDetails.note}</td>
                    </tr>
                </tbody>
            </table>
            <Button onClick={onClose} block>
                Close
            </Button>
        </ModalWrapper>
    );
};

export default EntryInfoModal;
