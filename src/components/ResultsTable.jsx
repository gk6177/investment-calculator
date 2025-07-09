import { formatter } from '../util/investment.js';

export default function ResultsTable({ output }) {
    if (!output.length) return null;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {output.map(row => (
                    <tr key={row.year}>
                        <td className="center">{row.year}</td>
                        <td>{row.investmentValue}</td>
                        <td>{row.interest}</td>
                        <td>{row.totalInterest}</td>
                        <td>{row.investedCapital}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
