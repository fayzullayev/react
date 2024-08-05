import { ReactNode, useEffect, useState } from 'react';
import Message from './Message.tsx';

function App(): ReactNode {
  const [advice, setAdvice] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const { slip } = await response.json();

    setAdvice(slip.advice);
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    (async () => {
      await getAdvice();
    })();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
}

export default App;
