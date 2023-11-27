import Label from "../Label/Label";

export default function Select({ data }) {
    return (
        <select>
            {data.map((entry) => (
                <option
                    key={entry.name}
                >{`${entry.name} (${entry.symbol})`}</option>
            ))}
        </select>
    );
}
