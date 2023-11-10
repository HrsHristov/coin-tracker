import reactImg from "../assets/react-core-concepts.png";

export default function Header() {
    return (
        <header>
            <img src={reactImg} alt="CoinTrack's logo"></img>
            <h1>CoinTrack</h1>
            <p>A simple app to track cryptocurrency coins</p>
        </header>
    );
}
