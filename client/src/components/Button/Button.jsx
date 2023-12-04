import "./Button.css";

const Button = ({ children, primary, block, ...props }) => {
    return (
        <button
            type="submit"
            className={`button ${
                primary ? "button--primary" : "button--secondary"
            } ${block && "button--block"}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
