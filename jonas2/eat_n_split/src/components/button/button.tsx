import { HTMLAttributes } from 'react';

function Button({ children, ...rest }: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={'button'} {...rest}>
      {children}
    </button>
  );
}

export default Button;
