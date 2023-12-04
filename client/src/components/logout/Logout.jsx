import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../../services/authService";
import AuthContext from "../../Contexts/authContext";
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
            .catch(() => navigate(Path.Coins));
    }, []);

    return null;
};

export default Logout;
