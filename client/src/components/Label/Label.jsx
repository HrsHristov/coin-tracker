import "./Label.css";

const Label = ({ htmlFor, children, ...props }) => {
    return (
        <label htmlFor={htmlFor} {...props} className="form-group__label">
            {children}
        </label>
    );
};

export default Label;
