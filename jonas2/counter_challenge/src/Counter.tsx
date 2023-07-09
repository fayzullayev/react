import { ChangeEvent, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + count);

  function handleStep(e: ChangeEvent<HTMLInputElement>) {
    setStep(+e.target.value);
  }

  return (
    <div>
      <div>
        <input
          min={0}
          max={10}
          value={step}
          onChange={handleStep}
          type="range"
        />{" "}
        <span>{step}</span>
      </div>

      <div>
        <button onClick={() => setCount((prevState) => prevState - step)}>
          -
        </button>

        <input
          value={count}
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCount(+e.target.value)
          }
        />

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
      <br />
      {(count !== 0 || step != 1) && (
        <button
          onClick={() => {
            setStep(0);
            setCount(1);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default Counter;
