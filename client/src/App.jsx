import CoinsList from "./components/CoinsList.jsx";
import TableWrapper from "./components/TableWrapper.jsx";
import Header from "./components/Header.jsx";
import PortfolioList from "./components/PortfolioList.jsx";

function App() {
    return (
        <>
            <Header />
            <TableWrapper
                titles={[
                    "Rank #",
                    "Name",
                    "Price",
                    "24H Change",
                    "MarketCap",
                    "24h Volume",
                    "BTC Price",
                ]}
            >
                <CoinsList />
            </TableWrapper>

            <TableWrapper
                titles={[
                    "Name",
                    "Price",
                    "Change",
                    "Holdings",
                    "AvG Buy Price",
                    "Profit/Loss",
                    "Actions",
                ]}
            >
                <PortfolioList />
            </TableWrapper>
        </>
    );
}

export default App;
