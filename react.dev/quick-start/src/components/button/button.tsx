import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
   count: number;
   setCount: () => void;
}

const Button = ({ count, setCount, children }: ButtonProps) => {
   return (
      <button onClick={setCount}>
         {children} : {count}
      </button>
   );
};

export default Button;
