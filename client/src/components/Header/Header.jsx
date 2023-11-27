import { Link } from "react-router-dom";

import reactImg from "../../assets/react-core-concepts.png";
import Button from "../Button/Button";
import Navigation from "../Navigation/Navigation";

import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header_logo">
                <img src={reactImg} alt="CoinTrack's logo" />
                <span>CoinTrack</span>
            </div>

            <Navigation />
            <div className="header_actions">
                <Link to="/login">
                    <Button primary>Login</Button>
                </Link>
                <Link to="/register">
                    <Button secondary>Sign Up</Button>
                </Link>
            </div>
        </header>
    );
}
