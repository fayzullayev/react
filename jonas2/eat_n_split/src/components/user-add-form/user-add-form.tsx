import { useState, useRef, useEffect, FormEvent } from 'react';
import Button from '../button';

type UserAddFormProps = {
  onAddFriend: (name: string, image: string) => void;
  onClose: () => void;
};

const initialImageUrlState = 'https://i.pravatar.cc/48';

function UserAddForm({ onAddFriend, onClose }: UserAddFormProps) {
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>(initialImageUrlState);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name.length > 0 && image.length > 0) {
      onAddFriend(name, image);
      setName('');
      setImage(initialImageUrlState);
      onClose();
      return;
    }

    alert('Fill the inputs');
    ref.current?.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
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

      <div className="form-actions">
        <Button style={{ width: 180 }}>Add</Button>
      </div>
    </form>
  );
}

export default UserAddForm;
