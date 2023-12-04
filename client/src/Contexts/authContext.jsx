import { useNavigate } from "react-router-dom";
import { createContext } from "react";

import Path from "../paths";
import usePersistedState from "../lib/usePersistedState";
import * as portfolioService from "../services/portfolioService";
import * as authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState("auth", {});
    // const [auth, setAuth] = useState({});

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

    const addEntrySubmitHandler = async (values) => {
        try {
            await portfolioService.create(values);
            navigate("/portfolio");
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
