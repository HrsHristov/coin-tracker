import { useState, useEffect, useContext } from "react";

import * as portfolioService from "../../services/portfolioService";

import TableHeader from "../TableHeader/TableHeader";
import PortfolioTableRow from "../PortfolioTableRow/PortfolioTableRow";
import AuthContext from "../../Contexts/authContext";

const PortfolioTable = () => {
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

    if (entries.length === 0) {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>No entries!</h1>
            </>
        );
    }

    return (
        <table>
            <TableHeader title="portfolio" />

            {entries.map((entry, index) => (
                <PortfolioTableRow
                    key={entry._id}
                    {...entry}
                    index={index}
                    handleEntries={handleEntries}
                />
            ))}
        </table>
    );
};

export default PortfolioTable;
