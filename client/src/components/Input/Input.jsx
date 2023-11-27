import Label from "../Label/Label";

export default function Input({
    type,
    name,
    labelName,
    placeholder,
    ...props
}) {
    return (
        <div>
            <Label htmlFor={type}>{labelName}:</Label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                {...props}
                // onChange={onChange}
                // value={values[LoginFormKeys.Email]}
            />
        </div>
    );
}
