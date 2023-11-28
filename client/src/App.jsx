import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import * as authService from "./servies/authService.js";
import AuthContext from "./Contexts/authContext.js";
import Path from "./paths.js";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CoinsList from "./components/CoinList/CoinsList.jsx";
import PortfolioList from "./components/PortfolioList/PortfolioList.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import CoinDetails from "./components/CoinDetails/CoinDetails.jsx";
import Logout from "./components/logout/Logout.jsx";

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem("accessToken");

        return {};
    });

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        /* Storing the result(login) into the Auth */
        setAuth(result);
        localStorage.setItem("accessToken", result.accessToken);
        navigate(Path.Coins);
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(
            values.email,
            values.password
        );

        setAuth(result);
        localStorage.setItem("accessToken", result.accessToken);
        navigate(Path.Coins);
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem("accessToken");
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !auth.email,
    };
    return (
        <AuthContext.Provider value={values}>
            <Header />
            <Routes>
                <Route path="/coins" element={<CoinsList />} />
                <Route path="/portfolio" element={<PortfolioList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/coins/:uuid" element={<CoinDetails />} />
                <Route path={Path.Logout} element={<Logout />} />
            </Routes>
            <Footer />
        </AuthContext.Provider>
    );
}

export default App;
