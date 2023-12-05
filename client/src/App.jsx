import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./Contexts/authContext";
import Path from "./paths";

import "reset-css/reset.css";
import AuthGuard from "./components/guards/AuthGuard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import CoinsTable from "./components/CoinsTable/CoinsTable";
import PortfolioTable from "./components/PortfolioTable/PortfolioTable";
import CoinDetails from "./components/CoinDetails/CoinDetails";
import Add from "./components/Add/Add";
import Edit from "./components/Edit/Edit";

function App() {
    return (
        <AuthProvider>
            <Header />

            <main className="container container--content">
                <Routes>
                    <Route path={Path.Coins} element={<CoinsTable />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Register} element={<Register />} />

                    <Route element={<AuthGuard />}>
                        <Route
                            path={Path.Portfolio}
                            element={<PortfolioTable />}
                        />
                        <Route path={Path.Add} element={<Add />} />
                        <Route path="portfolio/:_id/edit" element={<Edit />} />
                        <Route path="/coins/:uuid" element={<CoinDetails />} />
                        <Route path={Path.Logout} element={<Logout />} />
                    </Route>
                </Routes>
            </main>
            <Footer />
        </AuthProvider>
    );
}

export default App;
