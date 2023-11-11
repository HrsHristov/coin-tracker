import MainSectionHeader from "./MainSectionHeader.jsx";

export default function MainSection({ children, title }) {
    return (
        <>
            <div className="container d-flex-column gap-4 my-5">
                <MainSectionHeader title={title} />
                {children}
            </div>
        </>
    );
}
