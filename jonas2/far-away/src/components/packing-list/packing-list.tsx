import { ItemType } from '../types.ts';
import Item from '../item';

type PackingListType = {
  items: ItemType[];
  onDelete: (id: string) => void;
};

function PackingList({ items, onDelete }: PackingListType) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} {...item} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
