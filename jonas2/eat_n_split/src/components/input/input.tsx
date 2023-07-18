import { InputHTMLAttributes } from 'react';

function Input({ children, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="input">
      <div className="input-title">{children}</div>
      <div className="input-container">
        <input {...rest} />
      </div>
    </div>
  );
}

export default Input;
