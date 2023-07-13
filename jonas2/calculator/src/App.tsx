import { useState } from 'react';
import './App.css';

function App() {
  const [bill, setBill] = useState(0);
  const [me, setMe] = useState(0);
  const [friend, setFriend] = useState(0);

  const forService = ((bill * me) / 100 + (bill * friend) / 100) / 2;
  const total = bill + forService;

  return (
    <div>
      <div>
        How much was the bill?{' '}
        <input
          value={bill}
          onChange={(e) => setBill(+e.target.value)}
          type="text"
        />
      </div>
      <div>
        How did you like the service?{' '}
        <select value={me} onChange={(e) => setMe(+e.target.value)}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was god (10%)</option>
          <option value={20}>Absolutely amazing (20%)</option>
        </select>
      </div>
      <div>
        How did your friend like the service ?{' '}
        <select value={friend} onChange={(e) => setFriend(+e.target.value)}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was god (10%)</option>
          <option value={20}>Absolutely amazing (20%)</option>
        </select>
      </div>
      <br />
      <div>
        {bill > 0 && (
          <>
            <h2>
              You pay ${total} (${bill} + ${forService} tip)
            </h2>

            <button
              onClick={() => {
                setBill(0);
                setFriend(0);
                setMe(0);
              }}
            >
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
