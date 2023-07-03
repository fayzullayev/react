import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [advice, setAdvice] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  async function getAdvice(): Promise<void> {
    const res = await fetch('https://api.adviceslip.com/advice');

    const {
      slip: { advice },
    } = await res.json();

    setCount((prevState) => ++prevState);
    setAdvice(advice);
  }

  useEffect(() => {
    (async () => {
      await getAdvice();
    })();
  }, []);

  return (
    <>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </>
  );
}

export default App;

type MessageProps = {
  count: number;
};

function Message({ count }: MessageProps) {
  return (
    <p>
      You have read <strong>{count} pieces of advice</strong>
    </p>
  );
}
