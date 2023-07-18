import { useState } from 'react';
import UserAddForm from '../user-add-form';
import User from '../user';
import Button from '../button';
import { FriendDataType } from '../types.ts';

type UsersProps = {
  friends: FriendDataType[];
  onSelectFriend: (id: string) => void;
  currentFriendId: string | undefined;
  onClear: () => void;
  onAddFriend: (name: string, image: string) => void;
};
function Users({
  friends,
  onSelectFriend,
  currentFriendId,
  onClear,
  onAddFriend,
}: UsersProps) {
  const [isAddUserOpen, setIsAddUserOpen] = useState<boolean>(false);

  function handleToggleAddForm(): void {
    setIsAddUserOpen((prevState) => !prevState);
  }

  return (
    <div className="users-container">
      {friends.map((user: FriendDataType) => (
        <User
          {...user}
          key={user.id}
          onSelectFriend={onSelectFriend}
          isOpened={user.id === currentFriendId}
          onClear={onClear}
        />
      ))}

      {isAddUserOpen && (
        <UserAddForm onClose={handleToggleAddForm} onAddFriend={onAddFriend} />
      )}

      <div className="users-action">
        <Button onClick={handleToggleAddForm}>
          {isAddUserOpen ? 'Close' : 'Add friend'}
        </Button>
      </div>
    </div>
  );
}

export default Users;
