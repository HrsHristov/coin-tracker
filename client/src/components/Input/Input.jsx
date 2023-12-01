import Label from "../Label/Label";
import "./Input.css";
export default function Input({
    type,
    name,
    labelName,
    placeholder,
    onChange,
    value,
    ...props
}) {
    return (
        <div className="form-group">
            <Label htmlFor={type}>{labelName}:</Label>
            <input
                className="form-group__input"
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                {...props}
            />
        </div>
    );
}
