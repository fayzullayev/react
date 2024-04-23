import { DUMMY_PRODUCTS } from "../dummy-products.js";
import Product from "./Product.tsx";

type ShopProps = {
  onAddItemToCart: (id: string) => void;
};

export default function Shop({ onAddItemToCart }: ShopProps) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
}
