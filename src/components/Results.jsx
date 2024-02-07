import { calculateInvestmentResults, formatter } from "../util/investment";

const format = (value) => formatter.format(value);

function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

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
        {resultsData.map(
          ({ year, annualInvestment, interest, valueEndOfYear }) => {
            const totalInterest =
              valueEndOfYear - annualInvestment * year - initialInvestment;

            const totalAmountInvested = valueEndOfYear - totalInterest;

            return (
              <tr>
                <td>{year}</td>
                <td>{format(valueEndOfYear)}</td>
                <td>{format(interest)}</td>
                <td>{format(totalInterest)}</td>
                <td>{format(totalAmountInvested)}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}

export default Results;
