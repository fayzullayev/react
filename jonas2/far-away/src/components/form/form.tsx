import { ChangeEvent, FormEvent, useState } from 'react';
import { nanoid } from 'nanoid';
import { ItemType } from '../types.ts';

type FormType = {
  onSubmit: (item: ItemType) => void;
};

function Form({ onSubmit }: FormType) {
  const [itemName, setItemName] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (itemName.length > 0) {
      onSubmit({
        id: nanoid(),
        packed: false,
        quantity,
        description: itemName,
      });

      setItemName('');
      setQuantity(1);
    }
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for 😍 trip</h3>

      <select
        value={quantity}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          setQuantity(+event.target.value)
        }
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        value={itemName}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setItemName(event.target.value)
        }
        type="text"
        placeholder="Item..."
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
