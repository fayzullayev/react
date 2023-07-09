import { ItemType } from '../types.ts';

interface ItemTypeComponentType extends ItemType {
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

function Item({
  id,
  packed,
  quantity,
  description,
  onDelete,
  onToggle,
}: ItemTypeComponentType) {
  function handleToggle() {
    onToggle(id);
  }
  return (
    <li>
      <span className="item">
        <input type="checkbox" checked={packed} onChange={handleToggle} />

        <span
          style={
            packed
              ? { textDecoration: 'line-through', marginLeft: 8 }
              : { marginLeft: 8 }
          }
        >
          {quantity} {description}
        </span>
        <div
          onClick={() => onDelete(id)}
          style={{ fontSize: 18, marginLeft: 5, cursor: 'pointer' }}
        >
          ❌
        </div>
      </span>
    </li>
  );
}

export default Item;
