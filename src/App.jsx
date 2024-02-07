import React, { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 2000,
    expectedReturn: 40000,
    duration: 5,
  });

  const inputIsValid = userInput.duration >= 1;
  const errorMessage = (
    <p className="center danger">Error! Type a duration greater than 0</p>
  );

  function handleChange(inputId, value) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputId]: +value,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {inputIsValid ? <Results input={userInput} /> : errorMessage}
    </>
  );
}

export default App;
