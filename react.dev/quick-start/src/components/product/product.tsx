import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
   myName: boolean;
}

const Product = ({ myName }: ButtonProps) => {
   return (
      <div>
         my name : {myName ? 'Mirodil\n' : 'Your name\n'}
         {myName && 'Helllo'}
      </div>
   );
};

export default Product;

export class ProductItem {
   constructor(public id: number, public title: string) {}
}
