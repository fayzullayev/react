import { ItemType } from '../types.ts';
import Item from '../item';
import { ChangeEvent, useState } from 'react';

type PackingListType = {
  items: ItemType[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onClear: () => void;
};

function PackingList({ items, onDelete, onToggle, onClear }: PackingListType) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') {
    sortedItems = items;
  } else if (sortBy === 'description') {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            {...item}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSortBy(e.target.value)
          }
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={onClear}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
