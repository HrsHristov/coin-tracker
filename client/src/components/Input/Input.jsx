import Label from "../Label/Label";
import "./Input.css";

const Input = ({
    labelName,
    type,
    name,
    placeholder,
    data,
    message,
    ...props
}) => {
    return (
        <div className="form-group">
            <Label htmlFor={type}>{labelName}:</Label>
            <input
                className="form-group__input"
                type={type}
                name={name}
                placeholder={placeholder}
                {...data}
                {...props}
            />
            <div style={{ color: "red" }}>{message}</div>
        </div>
    );
};

export default Input;
