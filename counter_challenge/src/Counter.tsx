import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const currentDate = new Date();

  currentDate.setDate(currentDate.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((prevState) => prevState - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((prevState) => prevState + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((prevState) => prevState - step)}>
          -
        </button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((prevState) => prevState + step)}>
          +
        </button>
      </div>

      <div>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>{" "}
        <span>{currentDate.toDateString()}</span>
      </div>
    </div>
  );
}

export default Counter;
