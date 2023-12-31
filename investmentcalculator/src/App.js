import Results from "./components/Results";
import UserInput from "./components/UserInput";
import Header from "./components/header";
import { useState } from "react";

function App() {

  const [userInput,setUserInput] = useState({
    initialInvestment:10000,
    annualInvestment:50000,
    expectedReturn:5,
    duration:10
  })
  
  const inputIsValid = userInput.duration > 1;
  function handleUserInput(inputIdentifier,inputValue)
  {
      setUserInput((prevInputs) => {
          return {
              ...prevInputs,
              [inputIdentifier]:inputValue
          }
      });
  }
  return (
    <>
       <Header/>
       <UserInput userInput={userInput} onChange={handleUserInput} />
       { !inputIsValid && <p className="center">Please enter duration greater than zero.</p>}
       { inputIsValid && <Results input={userInput}/>}
    </>
  );
}

export default App;
