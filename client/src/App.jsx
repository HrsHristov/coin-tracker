import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./Contexts/authContext";
import Path from "./paths.js";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CoinsList from "./components/CoinList/CoinsList.jsx";
import PortfolioList from "./components/PortfolioList/PortfolioList.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import CoinDetails from "./components/CoinDetails/CoinDetails.jsx";
import Logout from "./components/logout/Logout.jsx";
import AddEntry from "./components/AddEntry/AddEntry.jsx";

import "reset-css/reset.css";

function App() {
    return (
        <AuthProvider>
            <Header />

            <main className="container container--content">
                <Routes>
                    <Route path={Path.Coins} element={<CoinsList />} />
                    <Route path={Path.Portfolio} element={<PortfolioList />} />
                    <Route path={Path.Add} element={<AddEntry />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Register} element={<Register />} />
                    <Route path="/coins/:uuid" element={<CoinDetails />} />
                    <Route path={Path.Logout} element={<Logout />} />
                </Routes>
            </main>
            <Footer />
        </AuthProvider>
    );
}

export default App;
