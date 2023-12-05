import reactImg from "../../assets/logo.png";
import Navigation from "../Navigation/Navigation";

import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__logo">
                    <img src={reactImg} alt="CoinTrack's logo" />
                    <span>CoinTrack</span>
                </div>

                <Navigation />
            </div>
        </header>
    );
};

export default Header;
