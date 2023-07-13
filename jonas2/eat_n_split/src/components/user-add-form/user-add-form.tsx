import { useState, useRef, useEffect, FormEvent } from 'react';
import Button from '../button';

type UserAddFormProps = {
  onAddFriend: (name: string, image: string) => void;
  onClose: () => void;
};

const initialImageUrlState = 'https://i.pravatar.cc/48';

function UserAddForm({ onAddFriend, onClose }: UserAddFormProps) {
  const [name, setName] = useState('');
  const [image, setImage] = useState(initialImageUrlState);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  function addHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name.length > 0 && image.length > 0) {
      onAddFriend(name, image);
      setName('');
      setImage(initialImageUrlState);
      onClose();
      return;
    }

    alert('Fill the inputs');
  }

  return (
    <form className="add_form" onSubmit={addHandler}>
      <div className="name">
        <div>👯‍ Friend name</div>
        <input
          ref={ref}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="image">
        <div>🌅 Image URL</div>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 18,
        }}
      >
        <Button style={{ width: 180 }}>Add</Button>
      </div>
    </form>
  );
}

export default UserAddForm;
