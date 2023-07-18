import { ReactNode } from 'react';
import { FriendDataType } from '../types.ts';
import Button from '../button';

interface UserPropsType extends FriendDataType {
  onSelectFriend: (id: string) => void;
  onClear: () => void;
  isOpened: boolean;
}
function User({
  name,
  image,
  balance,
  id,
  onSelectFriend,
  isOpened,
  onClear,
}: UserPropsType) {
  let message: ReactNode;

  if (balance > 0) {
    message = (
      <span className="blue">
        {name} owes you {Math.abs(balance)}&euro;
      </span>
    );
  } else if (balance < 0) {
    message = (
      <span className="red">
        You owe {name} {Math.abs(balance)}&euro;
      </span>
    );
  } else {
    message = <span className="gray">You and Anthony are even</span>;
  }

  function handleClick() {
    onSelectFriend(id);
  }

  return (
    <div className={`user-container ${isOpened ? 'active' : ''}`}>
      <div className="user-avatar">
        <img src={image} alt={name} />
      </div>
      <div className="user-info">
        <div className="user-info-name">{name}</div>
        <div className="user-info-balance">{message}</div>
      </div>
      <div className="user-actions">
        <Button onClick={isOpened ? onClear : handleClick}>
          {isOpened ? 'Close' : 'Select'}
        </Button>
      </div>
    </div>
  );
}

export default User;
