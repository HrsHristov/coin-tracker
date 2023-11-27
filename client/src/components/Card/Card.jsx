import "./Card.css";

export default function Card({ children }) {
    return (
        // should be className="card"
        <div className="card-custom">
            {/* <header className="base-modal__header">
        <h2>{title}</h2>
      </header>
      <main className="base-modal__content"></main> */}
            {children}
        </div>
    );
}
