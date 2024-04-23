import { Products } from "../type.ts";
import { useShopContext } from "../store/shop-context.tsx";

export default function Product({
  id,
  image,
  title,
  price,
  description,
}: Products) {
  const { onAddItemToCart } = useShopContext();

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={() => onAddItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
