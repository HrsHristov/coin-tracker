import "./Label.css";

export default function Label({ htmlFor, children, ...props }) {
    return (
        <label htmlFor={htmlFor} {...props} className="form-group__label">
            {children}
        </label>
    );
}
