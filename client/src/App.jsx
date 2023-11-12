import CoinsList from "./components/CoinsList.jsx";
import MainSection from "./components/MainSection.jsx";
import Header from "./components/Header.jsx";
import PortfolioList from "./components/PortfolioList.jsx";
import { useState } from "react";

function App() {
    const [selectedTable, setselectedTable] = useState("Coins");

    function handleSelect(selectedButton) {
        setselectedTable(selectedButton);
    }
    return (
        <>
            <Header />
            {/* <button
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
            </button> */}
            <main>
                {selectedTable === "Coins" && (
                    <MainSection title="Coins">
                        {/* <CoinsList /> */}
                        <PortfolioList />
                    </MainSection>
                )}
            </main>
        </>
    );
}

export default App;
