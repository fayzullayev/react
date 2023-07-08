import { ItemType } from '../types.ts';

function Item({ id, packed, quantity, description }: ItemType) {
  return (
    <li>
      <span className="item">
        <span style={packed ? { textDecoration: 'line-through' } : {}}>
          {quantity} {description}
        </span>
        <div style={{ fontSize: 18, marginLeft: 5 }}>❌</div>
      </span>
    </li>
  );
}

export default Item;
