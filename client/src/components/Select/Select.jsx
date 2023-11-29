export default function Select({ data, name, id, onChange }) {
    return (
        <select name={name} id={id} onChange={onChange}>
            {data.map((coin) => (
                <option
                    key={coin.name}
                    value={coin.uuid}
                >{`${coin.name} (${coin.symbol})`}</option>
            ))}
        </select>
    );
}
