import CoinsList from "./components/CoinsList.jsx";
import TableWrapper from "./components/TableWrapper.jsx";
import Header from "./components/Header.jsx";

function App() {
    return (
        <>
            <Header />
            <TableWrapper>
                <CoinsList />
            </TableWrapper>
        </>
    );
}

export default App;
