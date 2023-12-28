import { useState } from "react";

export default function UserInput()
{
    const [UserInput,setUserInput] = useState({
        initialInvestment:10000,
        annualInvestment:50000,
        expectedReturn:5,
        duration:10
    })

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
        <section id="user-input">
            <div className="input-group">
              <p>
                 <label>Initial Investment</label>
                 <input type="number" required value={UserInput.initialInvestment} onChange={(event) => handleUserInput('initialInvestment',event.target.value)}></input> 
              </p>
              <p>
                 <label>Annual Investment</label>
                 <input type="number" required value={UserInput.annualInvestment} onChange={(event) => handleUserInput('annualInvestment',event.target.value)}></input> 
              </p>    
            </div>
            <div className="input-group">
                <p>
                 <label>Expected Return</label>
                 <input type="number" required value={UserInput.expectedReturn} onChange={(event) => handleUserInput('expectedReturn',event.target.value)}></input> 
                </p>
                <p>
                 <label>Duration</label>
                 <input type="number" required value={UserInput.duration} onChange={(event) => handleUserInput('duration',event.target.value)}></input> 
                </p>  
            </div>
        </section>
    );

}