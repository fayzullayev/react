import { ButtonHTMLAttributes } from 'react';

function Button({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={'button'} {...rest}>
      {children}
    </button>
  );
}

export default Button;
