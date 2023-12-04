import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./Contexts/authContext";
import Path from "./paths";

import "reset-css/reset.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CoinsList from "./components/CoinList/CoinsList";
import PortfolioList from "./components/PortfolioList/PortfolioList";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CoinDetails from "./components/CoinDetails/CoinDetails";
import Logout from "./components/logout/Logout";
import AddEntry from "./components/AddEntry/AddEntry";

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
