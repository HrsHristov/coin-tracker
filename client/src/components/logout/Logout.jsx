import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../../services/authService";
import AuthContext from "../../contexts/authContext";
import Path from "../../paths";

const Logout = () => {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        authService
            .logout()
            .then(() => {
                logoutHandler();
                navigate(Path.Coins);
            })
            .catch(() => {
                logoutHandler();
                navigate(Path.Login);
            });
    }, []);

    return null;
};

export default Logout;
