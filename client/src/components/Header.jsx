import reactImg from "../assets/react-core-concepts.png";
import Navigation from "./Navigation";

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
                <Navigation />
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
