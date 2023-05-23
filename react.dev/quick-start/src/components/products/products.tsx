import { ReactElement } from 'react';
import { ProductItem } from '../../models/ProductItem.ts';
import Product from '../product';

const products: ProductItem[] = [
   new ProductItem(1, 'Cabbage'),
   new ProductItem(2, 'Garlic'),
   new ProductItem(3, 'Apple'),
];
const Products = () => {
   const items: ReactElement[] = products.map((product: ProductItem) => (
      <Product key={product.id} {...product} />
   ));

   return <div>{items}</div>;
};

export default Products;
