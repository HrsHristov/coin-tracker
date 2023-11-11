export default function TableHeader({ title }) {
    let titles = [
        "#",
        "Name",
        "Price",
        "24H Change",
        "MarketCap",
        "24h Volume",
        "BTC Price",
    ];

    if (title !== "Coins") {
        titles = [
            "Name",
            "Price",
            "Change",
            "Holdings",
            "AvG Buy Price",
            "Profit/Loss",
            "Actions",
        ];
    }
    return (
        <div className="coin-row coins-content-head">
            <div className="rank">{titles[0]}</div>
            <div className="d-flex gap-2 coin-icon-conteiner justify-content-start">
                <div className="coin-icon"></div>
                <div className="d-flex-center-content gap-2">
                    <span>{titles[1]}</span>
                </div>
            </div>
            <div>{titles[2]}</div>
            <div>{titles[3]}</div>
            <div>{titles[4]}</div>
            <div>{titles[5]}</div>
            <div>{titles[6]}</div>
        </div>
    );
}
