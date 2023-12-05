import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../../Contexts/authContext";
import Path from "../../paths";

const AuthGuard = () => {
    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
        return <Navigate to={Path.Login} />;
    }
    return <Outlet />;
};

export default AuthGuard;
