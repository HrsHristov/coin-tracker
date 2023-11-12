import reactImg from "../assets/react-core-concepts.png";

export default function Header() {
    return (
        <>
            <header className="container">
                <div className="d-flex align-items-center justify-content-start gap-3">
                    <img src={reactImg} alt="CoinTrack's logo"></img>

                    <div>
                        <span className="header-title">CointTrack</span>
                    </div>
                </div>
                <div className="d-flex gap-4 header-menu">
                    <div className="header-menu-item active">Coins</div>
                    <div className="header-menu-item">Portfolio</div>
                    <div className="header-menu-item">About us</div>
                    <div className="header-menu-item">Contacts</div>
                </div>
                <div className="d-flex gap-2">
                    <button type="submit" className="login-button">
                        Login
                    </button>
                    <button type="submit" className="sign-up-button">
                        Sign Up
                    </button>
                </div>
            </header>
            <div className="divider m-0 mx-5"></div>
        </>
    );
}
