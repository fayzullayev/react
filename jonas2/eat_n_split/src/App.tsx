import { useState } from 'react';
import { nanoid } from 'nanoid';
import User from './components/user';
import Button from './components/button';
import UserAddForm from './components/user-add-form';
import './App.css';
// import Users from './components/users';
// import UserAddForm from './components/user-add-form';
// import PayForm from './components/pay-form';
// import UserAddForm from './components/user-add-form';

const initialFriends: UserDataType[] = [
  {
    id: nanoid(),
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: nanoid(),
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: nanoid(),
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export type UserDataType = {
  id: string;
  name: string;
  image: string;
  balance: number;
};

function App() {
  const [users, setUsers] = useState<UserDataType[]>(initialFriends);
  const [isAddUserOpen, setIsAddUserOpen] = useState<boolean>(false);

  function handleToggleAddForm() {
    setIsAddUserOpen((prevState) => !prevState);
  }
  function handleAddFriend(name: string, image: string) {
    const newFriend: UserDataType = { id: nanoid(), name, image, balance: 0 };
    setUsers([...users, newFriend]);
  }
  //
  // function handlePay(money: number) {
  //   // setUsers([...users, newUser]);
  // }

  // function handleSelect(id: string | null) {
  //   // setUsers([...users, newtUser]);
  //   setCurrentUserId(id);
  // }

  return (
    <div className="app">
      <div className="user_section">
        {users.map((user: UserDataType) => (
          <User key={user.id} {...user} />
        ))}

        {isAddUserOpen && (
          <UserAddForm
            onClose={handleToggleAddForm}
            onAddFriend={handleAddFriend}
          />
        )}

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: 12,
          }}
        >
          <Button onClick={handleToggleAddForm}>
            {isAddUserOpen ? 'Close' : 'Add friend'}
          </Button>
        </div>
      </div>
      <div className="bill_section">
        {/*<PayForm onAddFriend={handleAddFriend} />*/}
      </div>
    </div>
  );
}

export default App;
