import * as portfolioAPI from "../../APIs/portfolioAPI.js";
import { useState, useEffect } from "react";

import ListWrapper from "../ListWrapper/ListWrapper.jsx";
import ListHeader from "../ListHeader/ListHeader.jsx";
import PortfolioListRow from "../PortfolioListRow/PortfolioListRow.jsx";
import DeleteModal from "../DeleteModal/DeleteModal.jsx";
import EntryInfoModal from "../EntryInfoModal/EntryInfoModal.jsx";

export default function PortfolioList() {
    const [entries, setEntries] = useState([]);
    const [selectedEntry, setSelectedEntry] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        portfolioAPI
            .getAllEntries()
            .then((result) => setEntries(result))
            .catch((err) => console.log(err));
    }, []);

    //Info Handler
    const entryInfoClickHandler = async (entryId) => {
        setSelectedEntry(entryId);
        setShowInfo(true);
    };

    //Delete Handler
    const deleteEntryClickHandler = async (entryId) => {
        setSelectedEntry(entryId);
        setShowDelete(true);
    };

    const deleteEntryHandler = async () => {
        const result = await portfolioAPI.remove(selectedEntry);
        setEntries((state) =>
            state.filter((entry) => entry._id !== selectedEntry)
        );
        setShowDelete(false);
    };

    return (
        <>
            {showDelete && (
                <DeleteModal
                    onClose={() => setShowDelete(false)}
                    onDelete={deleteEntryHandler}
                />
            )}

            {showInfo && (
                <EntryInfoModal
                    onClose={() => setShowInfo(false)}
                    entryId={selectedEntry}
                />
            )}

            <button type="submit" className="primary-button px-5">
                Add Entry
            </button>
            <ListWrapper>
                <ListHeader title="portfolio" />

                {entries.map((entry) => (
                    <PortfolioListRow
                        key={entry.uuid}
                        {...entry}
                        onInfoClick={entryInfoClickHandler}
                        onDeleteClick={deleteEntryClickHandler}
                    />
                ))}
            </ListWrapper>
        </>
    );
}
