import Button from './components/button';
import './App.css';
import Name from './components/name';
import Products from './components/products';

function App() {
   const hello = 'hello';

   // const p = {
   //    color: 'red',
   // };

   return (
      <div>
         <Name myName />
         <Name myName={false} />
         <Button hi={hello}>Click me!</Button>
         <hr />

         <Products />
      </div>
   );
}

export default App;
