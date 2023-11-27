const COINS_TITLES = [
    "Rank #",
    "Name",
    "Price",
    "24H Change",
    "MarketCap",
    "24h Volume",
    "BTC Price",
];

const PORTFOLIO_TITLES = [
    "Entry #",
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

    // if (title === "coins") {
    //     header = (
    //         <div className="coin-row coins-content-head">
    //             <div className="rank">#</div>
    //             <div className="d-flex gap-2 coin-icon-conteiner justify-content-start">
    //                 Name
    //             </div>
    //             {COINS_TITLES.map((title) => (
    //                 <div key={title}>{title}</div>
    //             ))}
    //         </div>
    //     );
    // } else {
    //     header = (
    //         <div className="coins coin-row coins-content-head">
    //             <div className="d-flex gap-2 coin-name-conteiner justify-content-start">
    //                 Name
    //             </div>
    //             {PORTFOLIO_TITLES.map((title) => (
    //                 <div key={title}>{title}</div>
    //             ))}
    //         </div>
    //     );
    // }

    return header;
}
