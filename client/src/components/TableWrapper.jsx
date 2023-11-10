export default function TableWrapper({ children }) {
    return (
        <>
            <div className="container d-flex-column gap-4 mb-5">{children}</div>
        </>
    );
}
