import React, { useEffect, useState } from 'react';
import './App.css';

function App(): React.ReactElement {
  const [state, setState] = useState<string | undefined>();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    (async () => {
      await getAdvice();
    })();
  }, []);

  async function getAdvice(): Promise<void> {
    const res: Response = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();

    setState(data.slip.advice);
    setCount((prevState: number) => ++prevState);
  }

  const advice: string = state ?? 'Click the button';

  return (
    <div className="App">
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get advice!</button>
      <Message count={count} />
    </div>
  );
}

type MessageProps = {
  count: number;
};

function Message({ count }: MessageProps): React.ReactElement {
  return (
    <p>
      You have read <strong>{count}</strong> pieces of advice
    </p>
  );
}

export default App;
