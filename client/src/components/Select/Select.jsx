import "./Select.css";

const Select = ({ data, name, id, onChange }) => {
    return (
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
    );
};

export default Select;
