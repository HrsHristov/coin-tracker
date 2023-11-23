import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CoinsList from "./components/CoinList/CoinsList.jsx";
import PortfolioList from "./components/PortfolioList/PortfolioList.jsx";
import CreateEntryModal from "./components/CreateEntryModal/CreateEntryModal.jsx";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/coins" element={<CoinsList />} />
                <Route path="/portfolio" element={<PortfolioList />} />
                <Route path="/add" element={<CreateEntryModal />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
