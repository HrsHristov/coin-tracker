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

        return (
            <div className="coins coin-row coins-content-head">
                <div className="d-flex gap-2 coin-name-conteiner justify-content-start">
                    {titles[0]}
                </div>
                <div>{titles[1]}</div>
                <div>{titles[2]}</div>
                <div>{titles[3]}</div>
                <div>{titles[4]}</div>
                <div>{titles[5]}</div>
                <div>{titles[6]}</div>
            </div>
        );
    }

    return (
        <div className="coin-row coins-content-head">
            <div className="rank">{titles[0]}</div>
            <div className="d-flex gap-2 coin-icon-conteiner justify-content-start">
                {titles[1]}
            </div>
            <div>{titles[2]}</div>
            <div>{titles[3]}</div>
            <div>{titles[4]}</div>
            <div>{titles[5]}</div>
            <div>{titles[6]}</div>
        </div>
    );
}
