import Label from "../Label/Label";

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
        <div>
            <Label htmlFor={type}>{labelName}:</Label>
            <input
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
