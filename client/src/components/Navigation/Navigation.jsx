import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <div className="d-flex gap-4 header-menu">
                <Link to="/coins">
                    <div className="header-menu-item active">Coins</div>
                </Link>
                <Link to="/portfolio">
                    <div className="header-menu-item">Portfolio</div>
                </Link>
                <Link to="/add">
                    <div className="header-menu-item">Add Entry</div>
                </Link>
                <Link to="/aboutus">
                    <div className="header-menu-item">About us</div>
                </Link>
                <Link to="/contants">
                    <div className="header-menu-item">Contacts</div>
                </Link>
            </div>
        </>
    );
}
