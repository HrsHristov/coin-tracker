import reactImg from "../../assets/react-core-concepts.png";
import Navigation from "../Navigation/Navigation";

import "./Header.css";

export default function Header() {
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
}
