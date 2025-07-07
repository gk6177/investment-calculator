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
  const [inputs, setInputs] = useState(INITIAL_INPUTS);

  function handleChange(identifier, newValue) {
    setInputs(prev => ({ ...prev, [identifier]: newValue }));
  }

  console.log(inputs);

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
        investmentValue: endValue,
        interest,
        totalInterest: runningInterest,
        investedCapital: initial + annualInvest * row.year,
      };
    });
  }

  const numericInputs = useMemo(
    () => ({
      initialInvestment: +inputs.initialInvestment,
      annualInvestment: +inputs.annualInvestment,
      expectedReturn: +inputs.expectedReturn,
      duration: +inputs.duration,
    }),
    [inputs]
  );

  const rawRows = calculateInvestmentResults(numericInputs);
  const resultsTable = buildResultsTable(rawRows, numericInputs.initialInvestment);


  console.log(resultsTable);

  return (
    <>
      <Header />
      <div id="user-input">

        <div className="input-group">
          <UserInput
            id="initialInvestment"
            labelName="Initial Investment"
            value={inputs.initialInvestment}
            onChange={handleChange}
          />
          <UserInput
            id="annualInvestment"
            labelName="Annual Investement"
            value={inputs.annualInvestment}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <UserInput
            id="expectedReturn"
            labelName="Expected Return"
            value={inputs.expectedReturn}
            onChange={handleChange}
          />
          <UserInput
            id="duration"
            labelName="Duration"
            value={inputs.duration}
            onChange={handleChange}
          />
        </div>

      </div >
      <ResultsTable data={resultsTable} />
    </>
  )
}

export default App
