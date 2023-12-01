import { Link } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../../Contexts/authContext";

import Button from "../Button/Button";
import "./Navigation.css";

// TODO - Add structure
// Use router name

export default function Navigation() {
    const { isAuthenticated, email } = useContext(AuthContext);
    return (
        <>
            <nav className="header-nav">
                <Link to="/coins" className="header-nav__link">
                    Coins
                </Link>
                <Link to="/portfolio" className="header-nav__link">
                    Portfolpio
                </Link>
                <Link to="/add" className="header-nav__link">
                    Add Entry
                </Link>
            </nav>

            {isAuthenticated && (
                <div className="header__actions">
                    <Link to="/login">
                        <Button primary>Login</Button>
                    </Link>
                    <Link to="/register">
                        <Button>Sign Up</Button>
                    </Link>
                </div>
            )}

            {!isAuthenticated && (
                <div className="header_actions">
                    <span>{email} | </span>
                    <Link to="/logout">
                        <Button primary>logout</Button>
                    </Link>
                </div>
            )}
        </>
    );
}
