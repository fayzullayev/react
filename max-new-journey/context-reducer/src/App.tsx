import Header from "./components/Header.tsx";
import Shop from "./components/Shop.tsx";
import { DUMMY_PRODUCTS } from "./dummy-products.ts";
import Product from "./components/Product.tsx";

function App() {
  return (
    <>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </>
  );
}

export default App;
