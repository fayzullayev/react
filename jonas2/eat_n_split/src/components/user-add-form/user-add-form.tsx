import Button from '../button';
import { useState } from 'react';

function UserAddForm() {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  return (
    <div className="add_form">
      <div className="left">
        <div>👯‍ Friend name</div>
        <div>🌅 Image URL</div>
      </div>
      <div className="right">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <Button style={{ width: '100%' }}>Add</Button>
      </div>
    </div>
  );
}

export default UserAddForm;
