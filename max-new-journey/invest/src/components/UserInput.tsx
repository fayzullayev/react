import { ChangeEvent } from 'react';
import { InvestmentType } from '../App.tsx';

type UserInputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  userInputs: InvestmentType;
};

function UserInput({ onChange, userInputs }: UserInputProps) {
  return (
    <section id="user-input">
      <div className={'input-group'}>
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={userInputs['initialInvestment']}
            required={true}
            onChange={onChange}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={userInputs['annualInvestment']}
            required={true}
            onChange={onChange}
          />
        </p>
      </div>

      <div className={'input-group'}>
        <p>
          <label htmlFor="">Expected return</label>
          <input
            type="number"
            name="expectedReturn"
            value={userInputs['expectedReturn']}
            required={true}
            onChange={onChange}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            name="duration"
            value={userInputs['duration']}
            required={true}
            onChange={onChange}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
