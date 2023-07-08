import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
import Logo from './components/logo';
import Form from './components/form';
import PackingList from './components/packing-list';
import Stats from './components/stats';
import './App.css';
import { ItemType } from './components/types.ts';

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

  const length = list.length;

  let progress = 0;

  progress = list.reduce((acc, next) => {
    if (next.packed) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  progress = progress / length;

  return (
    <div className={'app'}>
      <Logo />
      <Form onSubmit={handleSubmit} />
      <PackingList items={list} />
      <Stats length={length} progress={progress} />
    </div>
  );
}

export default App;
