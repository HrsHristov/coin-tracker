import CoinsList from "./components/CoinsList.jsx";
import MainSection from "./components/MainSection.jsx";
import Header from "./components/Header.jsx";
import PortfolioList from "./components/PortfolioList.jsx";
import { useState } from "react";
import Form from "./components/Form.jsx";

function App() {
    const [selectedTable, setselectedTable] = useState("Portfolio");

    function handleSelect(selectedButton) {
        setselectedTable(selectedButton);
    }
    return (
        <>
            <Header />
            <button
                isSelected={selectedTable === "Coins"}
                onClick={() => handleSelect("Coins")}
            >
                Coins
            </button>
            <button
                isSelected={selectedTable === "Portfolio"}
                onClick={() => handleSelect("Portfolio")}
            >
                Portfolio
            </button>
            <main>
                {selectedTable === "Coins" && (
                    <MainSection title="Coins">
                        <CoinsList />
                    </MainSection>
                )}

                {selectedTable === "Portfolio" && (
                    <>
                        <MainSection title="Portfolio">
                            <PortfolioList />
                        </MainSection>
                    </>
                )}
            </main>
        </>
    );
}

export default App;
