export default function UserInput({ input, onChange }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment ($)</label>
                    <input
                        type="number"
                        required
                        value={input.initialInvestment}
                        onChange={e => onChange('initialInvestment', e.target.value)}
                    />
                </p>
                <p>
                    <label>Annual Investement ($)</label>
                    <input
                        type="number"
                        required
                        value={input.annualInvestment}
                        onChange={e => onChange('annualInvestment', e.target.value)}
                    />
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label>Expected Return (%)</label>
                    <input
                        type="number"
                        required
                        value={input.expectedReturn}
                        onChange={e => onChange('expectedReturn', e.target.value)}
                    />
                </p>
                <p>

                    <label>Duration (Years)</label>
                    <input
                        type="number"
                        required
                        value={input.duration}
                        onChange={e => onChange('duration', e.target.value)}
                    />
                </p>
            </div>
        </section >
    )
}


