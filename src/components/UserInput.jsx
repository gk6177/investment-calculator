

export default function UserInput({ id, labelName, value, onChange }) {
    return (
        <p>
            <label>{labelName}</label>
            <input
                id={id}
                type="number"
                value={value}
                onChange={e => onChange(id, e.target.value)}

            />
        </p>
    )
}