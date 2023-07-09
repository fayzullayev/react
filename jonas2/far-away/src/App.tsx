import { ReactElement, useState } from 'react';
import { nanoid } from 'nanoid';
import Logo from './components/logo';
import Form from './components/form';
import PackingList from './components/packing-list';
import Stats from './components/stats';
import { ItemType } from './components/types.ts';
import './App.css';

const initialItems: ItemType[] = [
  {
    id: nanoid(),
    description: 'Passports',
    quantity: 2,
    packed: false,
  },
  {
    id: nanoid(),
    description: 'Socks',
    quantity: 12,
    packed: true,
  },
];

function App(): ReactElement {
  const [items, setItems] = useState<ItemType[]>(initialItems);

  function handleSubmit(item: ItemType): void {
    setItems([...items, item]);
  }

  function handleDelete(id: string): void {
    setItems((prevState) => prevState.filter((item) => item.id != id));
  }

  function handleToggle(id: string): void {
    setItems((prevState: ItemType[]) =>
      prevState.map((item: ItemType) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClear() {
    const confirm = window.confirm(
      'Are you sure you want to delete all items?',
    );

    if (confirm) setItems([]);
  }

  const length: number = items.length;

  const packedItem = items.reduce((acc: number, next: ItemType) => {
    if (next.packed) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  let percentOfPacked = 0;

  if (length > 0) {
    percentOfPacked = packedItem / length;
  } else {
    percentOfPacked = 0;
  }

  return (
    <div className={'app'}>
      <Logo />
      <Form onSubmit={handleSubmit} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onClear={handleClear}
      />
      <Stats
        length={length}
        percentOfPacked={percentOfPacked}
        packedItem={packedItem}
      />
    </div>
  );
}

export default App;
