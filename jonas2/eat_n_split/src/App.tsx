import { useState } from 'react';
import { nanoid } from 'nanoid';
import PayForm from './components/pay-form';
import Users from './components/users';
import { FriendDataType } from './components/types.ts';
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

function App() {
  const [friends, setFriends] = useState<FriendDataType[]>(initialFriends);
  const [currentFriend, setCurrentFriend] = useState<
    FriendDataType | undefined
  >(undefined);

  function handleAddFriend(name: string, image: string): void {
    const newFriend: FriendDataType = { id: nanoid(), name, image, balance: 0 };
    setFriends([...friends, newFriend]);
  }

  function handleSelectedFriend(id: string): void {
    let friend;

    const filteredFriends = friends.filter(
      (user: FriendDataType) => user.id === id,
    );

    if (filteredFriends.length > 0) {
      friend = filteredFriends[0];
    }

    setCurrentFriend(friend);
  }

  function handleBillPay(billAmount: number): void {
    setFriends((prevState) =>
      prevState.map((user: FriendDataType) =>
        user.id === currentFriend?.id
          ? { ...user, balance: user.balance + billAmount }
          : user,
      ),
    );
    handleClear();
  }

  function handleClear(): void {
    setCurrentFriend(undefined);
  }

  return (
    <div className="app">
      <Users
        friends={friends}
        onSelectFriend={handleSelectedFriend}
        currentFriendId={currentFriend?.id}
        onClear={handleClear}
        onAddFriend={handleAddFriend}
      />

      {currentFriend && (
        <PayForm friend={currentFriend} onPay={handleBillPay} />
      )}
    </div>
  );
}

export default App;
