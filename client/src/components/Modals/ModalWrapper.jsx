import "./ModalWrapper.css";

const ModalWrapper = ({ children, title }) => {
    return (
        <section className="base-modal">
            <header className="base-modal__header">
                <h2>{title}</h2>
            </header>
            <main className="base-modal__content">{children}</main>
        </section>
    );
};

export default ModalWrapper;
