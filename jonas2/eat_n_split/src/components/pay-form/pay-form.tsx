import { ChangeEvent, useState } from 'react';
import Button from '../button';
import { FriendDataType } from '../types.ts';
import './style.css';
import Input from '../input';

type PayFormProps = {
  onPay: (payAmount: number) => void;
  friend: FriendDataType;
};

function PayForm({ onPay, friend }: PayFormProps) {
  const [bill, setBill] = useState<number>(0);
  const [myExpense, setMyExpense] = useState<number>(0);
  const [whoIsPaying, setWhoIsPaying] = useState<string>('1');

  let friendExpense = 0;

  friendExpense = bill - myExpense;

  function handlePay() {
    let payAmount = 0;

    if (whoIsPaying === '1') {
      payAmount = friendExpense;
    } else {
      payAmount = -myExpense;
    }

    onPay(payAmount);
  }

  return (
    <div className="pay-form-container">
      <h1 style={{ marginBottom: 24 }}>Split a bill with {friend.name}</h1>

      <Input
        type="text"
        value={bill}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setBill(+e.target.value)
        }
      >
        💰 Bill value
      </Input>

      <Input
        type="text"
        value={myExpense}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setMyExpense(+e.target.value)
        }
      >
        🧍‍♀️ Your expense
      </Input>

      <Input disabled={true} type="number" value={friendExpense}>
        🧑‍🤝‍🧑{friend.name}'s expense
      </Input>

      <div className="input">
        <div className="input-title">🤑 Who is paying the bill</div>
        <div className="input-container2">
          <select
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
          >
            <option value="1">You</option>
            <option value="2">{friend.name}</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button style={{ width: 120 }} onClick={handlePay}>
          Split bill
        </Button>
      </div>
    </div>
  );
}

export default PayForm;
