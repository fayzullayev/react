import { PropsWithChildren } from 'react';

interface ButtonProduct extends PropsWithChildren {
   title: string;
}

const Product = ({ title }: ButtonProduct) => {
   return (
      <div>
         <h2>{title === 'Garlic' ? 'Garlic' : <p style={{ color: 'red' }}>{title}</p>}</h2>
         <hr />
      </div>
   );
};

export default Product;
