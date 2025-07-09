import { useState, useMemo } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import { calculateInvestmentResults, formatter } from './util/investment.js';
import ResultsTable from './components/ResultsTable.jsx';

const INITIAL_INPUTS = {
  initialInvestment: '',
  annualInvestment: '',
  expectedReturn: '',
  duration: '',
};

function App() {
  const [input, setInput] = useState(INITIAL_INPUTS);

  function handleChange(identifier, newValue) {
    setInput(prev => ({ ...prev, [identifier]: newValue }));
  }

  console.log(input);

  const numericInputs = useMemo(
    () => ({
      initialInvestment: +input.initialInvestment,
      annualInvestment: +input.annualInvestment,
      expectedReturn: +input.expectedReturn,
      duration: +input.duration,
    }),
    [input]
  );

  function buildResultsTable(rows, initialInvestment) {
    let runningInterest = 0;
    const initial = +initialInvestment || 0;

    return rows.map(row => {
      const interest = +row.interest;
      const annualInvest = +row.annualInvestment;
      const endValue = +row.valueEndOfYear;

      runningInterest += interest;

      return {
        year: row.year,
        investmentValue: formatter.format(endValue),
        interest: formatter.format(interest),
        totalInterest: formatter.format(runningInterest),
        investedCapital: formatter.format(initial + annualInvest * row.year),
      };
    });
  }



  const rawRows = calculateInvestmentResults(numericInputs);
  const resultsTable = buildResultsTable(rawRows, numericInputs.initialInvestment);


  console.log(resultsTable);

  return (
    <>
      <Header />
      <UserInput input={input} onChange={handleChange} />
      <ResultsTable output={resultsTable} />
    </>
  )
}

export default App
