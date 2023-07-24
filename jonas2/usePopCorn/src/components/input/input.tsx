import { InputHTMLAttributes } from 'react';

function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...rest} />;
}

export default Input;
