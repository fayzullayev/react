import { ItemType } from '../types.ts';

interface ItemType2 extends ItemType {
  onDelete: (id: string) => void;
}

function Item({ id, packed, quantity, description, onDelete }: ItemType2) {
  return (
    <li>
      <span className="item">
        <span style={packed ? { textDecoration: 'line-through' } : {}}>
          {quantity} {description}
        </span>
        <div
          onClick={() => onDelete(id)}
          style={{ fontSize: 18, marginLeft: 5 }}
        >
          ❌
        </div>
      </span>
    </li>
  );
}

export default Item;
