import { useState, useEffect, useContext } from "react";

import * as portfolioService from "../../services/portfolioService";

import ListHeader from "../ListHeader/ListHeader";
import PortfolioListRow from "../PortfolioListRow/PortfolioListRow";
import AuthContext from "../../Contexts/authContext";

const PortfolioList = () => {
    const { userId } = useContext(AuthContext);
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        portfolioService
            .getAllEntries(userId)
            .then((result) => setEntries(result))
            .catch((err) => console.log(err));
    }, []);

    console.log(entries);

    const handleEntries = async (_id) => {
        await portfolioService.remove(_id);
        setEntries((state) => state.filter((entry) => entry._id !== _id));
    };

    return (
        <table>
            <ListHeader title="portfolio" />

            {entries.map((entry, index) => (
                <PortfolioListRow
                    key={entry._id}
                    {...entry}
                    index={index}
                    handleEntries={handleEntries}
                />
            ))}
        </table>
    );
};

export default PortfolioList;
