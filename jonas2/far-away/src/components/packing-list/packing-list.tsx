import { ItemType } from '../types.ts';
import Item from '../item';

type PackingListType = {
  items: ItemType[];
};
function PackingList({ items }: PackingListType) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
