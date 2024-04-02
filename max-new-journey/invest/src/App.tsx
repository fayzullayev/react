import Header from './components/Header.tsx';
import UserInput from './components/UserInput.tsx';
import { ChangeEvent, useState } from 'react';
import Result from './components/Result.tsx';

export type InvestmentType = {
  [key: string]: number;
};

const INITIAL_VALUE: InvestmentType = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 6,
};

function App() {
  const [userInputs, setUserInput] = useState<InvestmentType>(INITIAL_VALUE);

  function handleChange({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>) {
    setUserInput((prevInputs) => ({
      ...prevInputs,
      [name]: +value,
    }));
  }

  const inputIsValid = userInputs.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInputs={userInputs} onChange={handleChange} />
      {inputIsValid ? (
        <Result input={userInputs} />
      ) : (
        <p className={'center'}>Invalid input</p>
      )}
    </>
  );
}

export default App;
