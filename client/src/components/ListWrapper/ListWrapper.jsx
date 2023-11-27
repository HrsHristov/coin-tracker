export default function ListWrapper({ children }) {
    return (
        <>
            <div className="container d-flex-column gap-4 my-5">{children}</div>
        </>
    );
}
