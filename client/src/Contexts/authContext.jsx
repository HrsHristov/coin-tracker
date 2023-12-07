import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import Path from "../paths";
import usePersistedState from "../lib/usePersistedState";
import * as portfolioService from "../services/portfolioService";
import * as authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState("auth", {});
    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        console.log(values);

        // /* Storing the result(login) into the Auth */
        try {
            setAuth(result);
            localStorage.setItem("accessToken", result.accessToken);
            navigate(Path.Coins);
        } catch (err) {
            console.log(err);
        }
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

    const addEntrySubmitHandler = async (values) => {
        try {
            await portfolioService.create(values);
            navigate("/portfolio");
            console.log(values.Date);
        } catch (err) {
            // Error notification
            console.log(err);
        }
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        addEntrySubmitHandler,
        userId: auth._id,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !auth.email,
    };
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

AuthContext.displayName = "AuthContext";
export default AuthContext;
