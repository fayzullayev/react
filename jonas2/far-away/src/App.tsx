import { useState } from 'react';
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

function App() {
  const [list, setList] = useState<ItemType[]>(initialItems);

  function handleSubmit(item: ItemType) {
    setList([...list, item]);
  }

  function handleDelete(id: string) {
    setList((prevState) => prevState.filter((item) => item.id != id));
  }

  const length = list.length;

  let progress = 0;

  progress = list.reduce((acc, next) => {
    if (next.packed) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  if (length > 0) {
    progress = progress / length;
  }

  return (
    <div className={'app'}>
      <Logo />
      <Form onSubmit={handleSubmit} />
      <PackingList items={list} onDelete={handleDelete} />
      <Stats length={length} progress={progress} />
    </div>
  );
}

export default App;
