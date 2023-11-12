import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MainSection from "./components/MainSection.jsx";
import CoinsList from "./components/CoinsList.jsx";
import PortfolioList from "./components/PortfolioList.jsx";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route
                    path="/coins"
                    element={
                        <MainSection title="Coins">
                            <CoinsList />
                        </MainSection>
                    }
                />
                <Route
                    path="/portfolio"
                    element={
                        <MainSection title="Portfolio">
                            <PortfolioList />
                        </MainSection>
                    }
                />
                <Route />
                <Route />
            </Routes>
            <Footer />
        </>
    );
    // return (
    //     <>
    //         <Header />
    //         {/* <button
    //             isSelected={selectedTable === "Coins"}
    //             onClick={() => handleSelect("Coins")}
    //         >
    //             Coins
    //         </button>
    //         <button
    //             isSelected={selectedTable === "Portfolio"}
    //             onClick={() => handleSelect("Portfolio")}
    //         >
    //             Portfolio
    //         </button> */}
    //         <main>
    //             {selectedTable === "Portfolio" && (
    //                 <MainSection title="Portfolio">
    //                     {/* <CoinsList /> */}
    //                     <PortfolioList />
    //                 </MainSection>
    //             )}
    //         </main>
    //         <Footer />
    //     </>
    // );
}

export default App;
