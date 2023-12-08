import Label from "../Label/Label";
import "./Input.css";

const Input = ({ type, name, labelName, placeholder, data, ...props }) => {
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
        </div>
    );
};

export default Input;
