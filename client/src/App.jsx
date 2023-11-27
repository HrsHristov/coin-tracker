import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CoinsList from "./components/CoinList/CoinsList.jsx";
import PortfolioList from "./components/PortfolioList/PortfolioList.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import CoinDetails from "./components/CoinDetails/CoinDetails.jsx";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/coins" element={<CoinsList />} />
                <Route path="/portfolio" element={<PortfolioList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/coins/:uuid" element={<CoinDetails />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
