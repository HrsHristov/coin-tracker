import ListWrapper from "../ListWrapper/ListWrapper";

export default function CoinDetails() {
    return (
        <ListWrapper>
            {/* "Header" section with Logo, Name, Price */}
            <div>
                {/* bitcoin logo infront of the name */}
                <h2>Bitcoin</h2>
                <p>$36,256.25</p>
                <p>
                    Bitcoin is a digital currency with a finite supply, allowing
                    users to send/receive money without a central
                    bank/government, often nicknamed "Digital Gold"
                </p>
            </div>

            {/* Chart section */}
            <div>
                <p>PUT chart here</p>
            </div>

            {/* Section with  with recent price movements*/}
            <div>
                <div>
                    <h5>Volume 24h</h5>
                    <p>29k</p>
                    <p className="up">+1.14%</p>
                </div>

                <div>
                    <h5>Volume 24h</h5>
                    <p>29k</p>
                </div>
            </div>

            {/* Section for general coin info */}
            <div>
                <div>
                    <h5>All Time High</h5>
                    <p>68.763,25</p>
                </div>

                <div>
                    <p>marketCap</p>
                    <p>29k</p>
                </div>
            </div>
        </ListWrapper>
    );
}
