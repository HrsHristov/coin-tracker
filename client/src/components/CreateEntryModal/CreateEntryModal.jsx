import { useState, useEffect } from "react";
import * as portfolioAPI from "../../APIs/portfolioAPI.js";

export default function CreateEntryModal({ onClose, onCreate }) {
    const [symbols, setSymbols] = useState([]);

    useEffect(() => {
        portfolioAPI
            .getAllSymbols()
            .then((result) => setSymbols(result))
            .catch((err) => console.log(err));
    }, []);

    const createEntrySubmitHandler = (e) => {
        e.preventDefault();

        const entryData = Object.fromEntries(new FormData(e.currentTarget));

        console.log(entryData);
    };

    return (
        <div className="app-modal">
            <form
                className="app-modal-content d-flex-column gap-4 add-modal-position"
                onSubmit={createEntrySubmitHandler}
            >
                <div className="container">
                    {/* <ul className="nav nav-tabs d-flex" id="myTab">
                        <li className="nav-item">
                            <button
                                className="nav-link active"
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#buy"
                                type="button"
                            >
                                Buy
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link"
                                id="table-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#sell"
                                type="button"
                            >
                                Sell
                            </button>
                        </li>
                    </ul> */}

                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="buy">
                            <div className="buy-tab">
                                <div className="mb-4">
                                    <select
                                        className="coins-select"
                                        name="coinName"
                                    >
                                        {symbols.map((symbol) => (
                                            <option
                                                key={symbol.name}
                                            >{`${symbol.name} (${symbol.symbol})`}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="d-flex gap-4 mb-4">
                                    <div className="flex-grow-1">
                                        <div>Quantity</div>
                                        <input
                                            className="coins-input"
                                            type="number"
                                            name="quanity"
                                            value="0.00"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div>Price per coin</div>
                                        <input
                                            className="coins-input"
                                            type="number"
                                            name="pricePer"
                                            value="9.2119"
                                        />
                                    </div>
                                </div>
                                {/* <div className="mb-4">
                                    <input
                                        type="date"
                                        id="buyCoinsCalendar"
                                        className="coins-calendar"
                                        name="buyCoinsCalendar"
                                    />
                                </div> */}
                                <div className="mb-4">
                                    <div>Notes</div>
                                    <textarea className="notes"></textarea>
                                </div>
                                <div className="total-spent mb-4">
                                    <div>Total spent</div>
                                    <div className="fw-bold">$0</div>
                                </div>
                                <div className="d-flex-center-content">
                                    <button
                                        className="primary-button"
                                        type="submit"
                                        onClick={onCreate}
                                    >
                                        Add transaction
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="tab-pane fade" id="sell">
                            Sell Content
                        </div> */}
                    </div>
                </div>
            </form>
        </div>
    );
}
