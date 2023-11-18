import * as portfolioAPI from "../../APIs/portfolioAPI.js";
import { useState, useEffect } from "react";

import ListWrapper from "../ListWrapper/ListWrapper.jsx";
import ListHeader from "../ListHeader/ListHeader.jsx";
import PortfolioListRow from "../PortfolioListRow/PortfolioListRow.jsx";

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
        <ListWrapper>
            <ListHeader title="portfolio" />

            {entries.map((entry) => (
                <PortfolioListRow key={entry.uuid} {...entry} />
            ))}
        </ListWrapper>
    );
}
