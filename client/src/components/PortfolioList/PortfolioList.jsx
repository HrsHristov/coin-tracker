import { useState, useEffect } from "react";

import * as portfolioService from "../../servies/portfolioService.js";

import ListWrapper from "../ListWrapper/ListWrapper.jsx";
import ListHeader from "../ListHeader/ListHeader.jsx";
import PortfolioListRow from "../PortfolioListRow/PortfolioListRow.jsx";
import DeleteEntryModal from "../Modals/DeleteEntryModal/DeleteEntryModal.jsx";
import EntryInfoModal from "../Modals/EntryInfoModal/EntryInfoModal.jsx";
import Button from "../Button/Button.jsx";

export default function PortfolioList() {
    const [entries, setEntries] = useState([]);
    const [selectedEntry, setSelectedEntry] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        portfolioService
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
                <DeleteEntryModal
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

            <ListWrapper>
                <Button primary>Add Entry</Button>
                <table>
                    <ListHeader title="portfolio" />

                    {entries.map((entry) => (
                        <PortfolioListRow
                            key={entry.uuid}
                            {...entry}
                            onInfoClick={entryInfoClickHandler}
                            onDeleteClick={deleteEntryClickHandler}
                        />
                    ))}
                </table>
            </ListWrapper>
        </>
    );
}
