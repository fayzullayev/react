import { ChangeEvent, useState } from 'react';

export type InvestmentType = {
  [key: string]: number;
};

const INITIAL_VALUE: InvestmentType = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 6,
};

type UserInputProps = {};
function UserInput({}: UserInputProps) {
  const [userInput, setUserInput] = useState<InvestmentType>(INITIAL_VALUE);

  function handleChange({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>) {
    setUserInput((prevInputs) => ({
      ...prevInputs,
      [name]: +value,
    }));
  }

  console.log('userInput', userInput);

  return (
    <section id="user-input">
      <div className={'input-group'}>
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={userInput['initialInvestment']}
            required={true}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={userInput['annualInvestment']}
            required={true}
            onChange={handleChange}
          />
        </p>
      </div>

      <div className={'input-group'}>
        <p>
          <label htmlFor="">Expected return</label>
          <input
            type="number"
            name="expectedReturn"
            value={userInput['expectedReturn']}
            required={true}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            name="duration"
            value={userInput['duration']}
            required={true}
            onChange={handleChange}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
