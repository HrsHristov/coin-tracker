const COINS_TITLES = [
    "#",
    "Name",
    "Price",
    "24H Change",
    "MarketCap",
    "24h Volume",
    "BTC Price",
];

const PORTFOLIO_TITLES = [
    "#",
    "Name",
    "Price",
    "Change",
    "Holdings",
    "Buy Price",
    "Profit/Loss",
    "Actions",
];
export default function ListHeader({ title }) {
    let header;

    if (title === "coins") {
        header = (
            <tr>
                {COINS_TITLES.map((title) => (
                    <th key={title}>{title}</th>
                ))}
            </tr>
        );
    } else {
        header = (
            <tr>
                {PORTFOLIO_TITLES.map((title) => (
                    <th key={title}>{title}</th>
                ))}
            </tr>
        );
    }
    return header;
}
