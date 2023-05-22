import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
   hi: string;
}

const Button = ({ hi, children }: ButtonProps) => {
   return (
      <button>
         {children} : {hi}
      </button>
   );
};

export default Button;
