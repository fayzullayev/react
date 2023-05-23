import { useState } from 'react';
import Products from './components/products';
import Name from './components/name';
import Button from './components/button';
import './App.css';

function App() {
   const [count, setCount] = useState<number>(0);

   function handleClick(): void {
      setCount((prevState: number) => prevState + 1);
   }

   return (
      <div>
         <Name myName />
         <Name myName={false} />
         <Button count={count} setCount={handleClick}>
            Click me!
         </Button>
         <Button count={count} setCount={handleClick}>
            Click me!
         </Button>
         <Button count={count} setCount={handleClick}>
            Click me!
         </Button>
         <hr />

         <Products />
      </div>
   );
}

export default App;
