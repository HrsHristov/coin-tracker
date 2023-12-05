import { Link } from "react-router-dom";
import reactImg from "../../assets/logo.png";
import Navigation from "../Navigation/Navigation";

import "./Header.css";
import Path from "../../paths";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__logo">
                    <Link to={Path.Coins}>
                        <img src={reactImg} alt="CoinTrack's logo" />
                    </Link>
                    <Link className="home" to={Path.Coins}>
                        CoinTrack
                    </Link>
                </div>

                <Navigation />
            </div>
        </header>
    );
};

export default Header;
