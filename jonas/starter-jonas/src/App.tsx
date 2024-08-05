import { ReactNode, useEffect, useState } from 'react';
import Message from './Message.tsx';
import { getAdviceList } from './api/advice.ts';

function App(): ReactNode {
  const [advice, setAdvice] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    (async () => {
      await getAdvice();
    })();
  }, []);

  async function getAdvice() {
    try {
      const response = await getAdviceList();

      setAdvice(response.data.name);
      setCount((prevCount) => prevCount + 1);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
}

export default App;
