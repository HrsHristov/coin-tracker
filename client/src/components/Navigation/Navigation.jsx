import { Link } from "react-router-dom";
import "./Navigation.css";

// TODO - Add structure
// Use router name

export default function Navigation() {
    return (
        <nav className="header-nav">
            <Link to="/coins" className="header-nav__link">
                Coins
            </Link>
            <Link to="/portfolio" className="header-nav__link">
                Portfolio
            </Link>
            <Link to="/details" className="header-nav__link">
                Details
            </Link>
        </nav>
    );
}
