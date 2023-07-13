import { UserDataType } from '../../App.tsx';
import Button from '../button';
import { ReactNode } from 'react';

// interface UserPropsType extends UserDataType {}
function User({ name, image, balance }: UserDataType) {
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
    message = <span className="even">You and Anthony are even</span>;
  }

  return (
    <div className="user">
      <div className="user_avatar">
        <img src={image} alt={name} />
      </div>
      <div className="user_info">
        <div className="user_info_name">{name}</div>
        <div className="user_info_balance">{message}</div>
      </div>
      <div className="user_actions">
        <Button>Select</Button>
      </div>
    </div>
  );
}

export default User;
