const products = [
   { title: 'Cabbage', id: 1 },
   { title: 'Garlic', id: 2 },
   { title: 'Apple', id: 3 },
];
const Products = () => {
   return (
      <div>
         my name : {myName ? 'Mirodil\n' : 'Your name\n'}
         {myName && 'Helllo'}
      </div>
   );
};

export default Products;
