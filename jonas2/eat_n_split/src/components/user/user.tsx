import { UserDataType } from '../../App.tsx';
import Button from '../button';

interface UserPropsType extends UserDataType {
  onPay: (money: number) => void;
  onClickPay: (id: string | null) => void;
}
function User({ id, name, image, balance, onPay, onClickPay }: UserPropsType) {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <div>{name}</div>
        <div>{balance}</div>
      </div>
      <div>
        <Button>Select</Button>
      </div>
    </div>
  );
}

export default User;
