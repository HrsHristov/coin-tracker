import * as portfolioAPI from "../APIs/portfolioAPI.js";
import { formatNumber, formatPrice } from "../utils/formatUtils.js";
import { useState, useEffect } from "react";

import plus from "../assets/plus.png";
import bin from "../assets/bin.png";
import info from "../assets/info.png";

import Delete from "./Delete.jsx";
import Form from "./Form.jsx";
import EntryInfoModal from "./EntryInfoModal.jsx";

export default function PortfolioList() {
    const [entries, setEntries] = useState([]);

    console.log(entries);

    useEffect(() => {
        portfolioAPI
            .getAllEntries()
            .then((result) => setEntries(result))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {entries.map((entry) => (
                <>
                    <div key={entry._id}>
                        <div className="divider"></div>
                        <div className="coin-row">
                            <div className="d-flex gap-2 coin-icon-conteiner">
                                <div className="coin-icon">
                                    <img className="img" src={entry.iconUrl} />
                                </div>
                                <div className="d-flex-center-content gap-2">
                                    <span>{entry.name}</span>
                                    <span>{entry.symbol}</span>
                                </div>
                            </div>
                            <div>
                                ${formatPrice("37516.56")}
                                {/* {portfolioAPI
                                    .getCurrentPrice(entry.uuid)
                                    .then((data) => data.price)} */}
                            </div>
                            <div className="up">+3%</div>
                            <div className="d-flex-column gap-1 text-end">
                                <div>$1359.24</div>
                                <div>1 BTC</div>
                            </div>
                            <div>${formatPrice("23215.42")}</div>
                            <div>12</div>
                            <div className="d-flex-end-content gap-2">
                                <button type="submit" className="button-action">
                                    <img src={info} width="16" height="16" />
                                </button>
                                {/* <button className="button-action">
                                <img src={plus} width="16" height="16" />
                            </button> */}
                                <button type="submit" className="button-action">
                                    <img src={bin} width="18" height="18" />
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ))}
            {/* <Delete /> */}
            {/* <Form /> */}
            {/* <EntryInfoModal /> */}
        </>
    );
}
