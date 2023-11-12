import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <div className="d-flex gap-4 header-menu">
                <Link to="/Coins">
                    <div className="header-menu-item active">Coins</div>
                </Link>
                <Link to="/Portfolio">
                    <div className="header-menu-item">Portfolio</div>
                </Link>
                <Link to="/Coins">
                    <div className="header-menu-item">About us</div>
                </Link>
                <Link to="/Coins">
                    <div className="header-menu-item">Contacts</div>
                </Link>
            </div>
        </>
    );
}
