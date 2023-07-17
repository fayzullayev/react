import { useState } from 'react';
import { nanoid } from 'nanoid';
import User from './components/user';
import Button from './components/button';
import UserAddForm from './components/user-add-form';
import PayForm from './components/pay-form';
import './App.css';

const initialFriends: FriendDataType[] = [
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

export type FriendDataType = {
  id: string;
  name: string;
  image: string;
  balance: number;
};

function App() {
  const [friends, setFriends] = useState<FriendDataType[]>(initialFriends);
  const [isAddUserOpen, setIsAddUserOpen] = useState<boolean>(false);
  const [currentFriend, setCurrentFriend] = useState<
    FriendDataType | undefined
  >(undefined);

  function handleToggleAddForm(): void {
    setIsAddUserOpen((prevState) => !prevState);
  }

  function handleAddFriend(name: string, image: string): void {
    const newFriend: FriendDataType = { id: nanoid(), name, image, balance: 0 };
    setFriends([...friends, newFriend]);
  }

  function handleCurrentFriend(id: string) {
    let friend;

    const filteredFriends = friends.filter(
      (user: FriendDataType) => user.id === id,
    );

    if (filteredFriends.length > 0) {
      friend = filteredFriends[0];
    }

    setCurrentFriend(friend);
  }

  function handleBillPay(billAmount: number) {
    setFriends((prevState) =>
      prevState.map((user: FriendDataType) =>
        user.id === currentFriend?.id
          ? { ...user, balance: user.balance + billAmount }
          : user,
      ),
    );
    handleClear();
  }

  function handleClear() {
    setCurrentFriend(undefined);
  }

  return (
    <div className="app">
      <div className="user_section">
        {friends.map((user: FriendDataType) => (
          <User
            key={user.id}
            {...user}
            onSelectFriend={handleCurrentFriend}
            isOpened={user.id === currentFriend?.id}
            onClear={handleClear}
          />
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
        {currentFriend && (
          <PayForm friend={currentFriend} onPay={handleBillPay} />
        )}
      </div>
    </div>
  );
}

export default App;
