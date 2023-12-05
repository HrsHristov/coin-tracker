import { useEffect, useState } from "react";

import { formatDate } from "../../../utils/dateUtils";
import * as portfolioAPI from "../../../services/portfolioService";
import { calculateHoldings } from "../../../utils/calculationsUtils";

import ModalWrapper from "../ModalWrapper";
import Button from "../../Button/Button";

const InfoModal = ({ entryId, onClose }) => {
    const [entryDetails, setEnetryDetails] = useState({});

    console.log(entryDetails);

    useEffect(() => {
        portfolioAPI.getOne(entryId).then((result) => setEnetryDetails(result));
    }, [entryId]);

    const createdOn = formatDate(entryDetails._createdOn);
    const updatedOn = formatDate(entryDetails._updatedOn);

    return (
        <ModalWrapper title="Transaction Details">
            <table className="mb-4">
                <tbody>
                    <tr>
                        <td>
                            <strong>Type:</strong>
                        </td>
                        <td>{entryDetails.type}</td>
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
                        <td>{entryDetails.quantity}</td>
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
                    <tr>
                        <td>
                            <strong>Created on:</strong>
                        </td>
                        <td>{createdOn}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Updated on:</strong>
                        </td>
                        {!updatedOn.includes("Invalid") && <td>{updatedOn}</td>}
                        {updatedOn.includes("Invalid") && <td>-</td>}
                    </tr>
                </tbody>
            </table>
            <Button onClick={onClose} block>
                Close
            </Button>
        </ModalWrapper>
    );
};

export default InfoModal;
