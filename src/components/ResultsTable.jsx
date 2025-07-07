import { formatter } from '../util/investment.js';

export default function ResultsTable({ data }) {
    if (!data.length) return null;

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
                {data.map(row => (
                    <tr key={row.year}>
                        <td className="center">{row.year}</td>
                        <td>{formatter.format(row.investmentValue)}</td>
                        <td>{formatter.format(row.interest)}</td>
                        <td>{formatter.format(row.totalInterest)}</td>
                        <td>{formatter.format(row.investedCapital)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
