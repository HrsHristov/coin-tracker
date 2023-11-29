import { useState, useEffect } from "react";

import * as portfolioService from "../../services/portfolioService.js";

import ListHeader from "../ListHeader/ListHeader.jsx";
import PortfolioListRow from "../PortfolioListRow/PortfolioListRow.jsx";
import Button from "../Button/Button.jsx";

export default function PortfolioList() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        portfolioService
            .getAllEntries()
            .then((result) => setEntries(result))
            .catch((err) => console.log(err));
    }, []);

    const handleEntries = async (_id) => {
        await portfolioService.remove(_id);
        setEntries((state) => state.filter((entry) => entry._id !== _id));
    };

    return (
        <>
            <table>
                <ListHeader title="portfolio" />

                {entries.map((entry) => (
                    <PortfolioListRow
                        key={entry._id}
                        {...entry}
                        handleEntries={handleEntries}
                    />
                ))}
            </table>
        </>
    );
}
