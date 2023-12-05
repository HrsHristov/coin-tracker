import Label from "../Label/Label";
import "./Select.css";

const Select = ({ data, name, id, type, labelName, onChange }) => {
    return (
        <div className="form-group">
            <Label htmlFor={type}>{labelName}:</Label>
            <select
                name={name}
                id={id}
                onChange={onChange}
                className="form-group__select"
            >
                <option value="">Select type...</option>
                {data.map((coin) => (
                    <option
                        key={coin.name}
                        value={coin.uuid}
                    >{`${coin.name} (${coin.symbol})`}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;
