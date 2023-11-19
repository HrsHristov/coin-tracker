import cross from "../../assets/cross.png";
import { useEffect, useState } from "react";

import * as portfolioAPI from "../../APIs/portfolioAPI.js";
import {
    calculateHoldings,
    calculatePNL,
    calculatePNLPercentage,
} from "../../utils/calculationsUtils.js";
import { formatDate } from "../../utils/dateUtils.js";

export default function EntryInfoModal({ entryId, onClose }) {
    const [entryDetails, setEnetryDetails] = useState({});

    console.log(entryDetails);

    useEffect(() => {
        portfolioAPI.getOne(entryId).then((result) => setEnetryDetails(result));
    }, [entryId]);

    return (
        <div className="app-modal">
            <div className="app-modal-content d-flex-column gap-4 add-modal-position">
                <div className="modal-title">
                    <span>Transaction Details</span>
                    <button onClick={onClose}>
                        <img src={cross} width="18" height="18" />
                    </button>
                </div>
                <div className="modal-content">
                    <div className="d-flex-between-content px-3">
                        <span className="secondary-text-color">Type</span>
                        <span>Buy</span>
                    </div>
                    <div className="divider my-3"></div>
                    <div className="d-flex-between-content px-3">
                        <span className="secondary-text-color">Date</span>
                        <span>{formatDate(entryDetails.date)}</span>
                    </div>
                    <div className="divider my-3"></div>
                    <div className="d-flex-between-content px-3">
                        <span className="secondary-text-color">
                            Price per coin
                        </span>
                        <span>${entryDetails.price}</span>
                    </div>
                    <div className="divider my-3"></div>
                    <div className="d-flex-between-content px-3">
                        <span className="secondary-text-color">Quantity</span>
                        <span>{`${entryDetails.quantity} ${entryDetails.symbol}`}</span>
                    </div>
                    <div className="divider my-3"></div>
                    <div className="d-flex-between-content px-3">
                        <span className="secondary-text-color">Fee</span>
                        <span>{entryDetails.fee}%</span>
                    </div>
                    <div className="divider my-3"></div>
                    <div className="d-flex-between-content px-3">
                        <span className="secondary-text-color">
                            Total Spent
                        </span>
                        <span>
                            $
                            {calculateHoldings(
                                entryDetails.price,
                                entryDetails.quantity
                            )}
                        </span>
                    </div>
                    <div className="divider my-3"></div>
                    <div className="d-flex-column px-3">
                        <span className="secondary-text-color">Note</span>
                        <span>{entryDetails.note}</span>
                    </div>
                    <div className="divider my-4"></div>
                </div>
            </div>
        </div>
    );
}
