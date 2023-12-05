import "./Button.css";

const Button = ({ children, primary, block, margin, ...props }) => {
    return (
        <button
            type="submit"
            className={`button ${margin} ${
                primary ? "button--primary" : "button--secondary"
            } ${block && "button--block"}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
