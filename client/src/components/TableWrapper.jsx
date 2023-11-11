export default function TableWrapper({ children, titles }) {
    return (
        <>
            <div className="container d-flex-column gap-4 mb-5">
                <div className="coin-row">
                    <div>{titles[0]}</div>
                    <div className="d-flex gap-2 coin-icon-conteiner">
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
                {children}
            </div>
        </>
    );
}
