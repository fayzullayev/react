import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonsType = {
  step: number;
  onClick: (isPrev?: boolean) => void;
};

function Buttons({ step, onClick }: ButtonsType) {
  const isFirst = step === 1;
  const isLast = step === 3;

  return (
    <div className={'buttons'}>
      <Button
        disabled={isFirst}
        onClick={() => onClick(true)}
        style={{
          backgroundColor: isFirst ? '#9a969a' : '#7950f2',
          color: '#fff',
        }}
      >
        <span>👈</span>Previous
      </Button>

      <Button
        disabled={isLast}
        onClick={() => onClick()}
        style={{
          backgroundColor: isLast ? '#9a969a' : '#7950f2',
          color: '#fff',
        }}
      >
        Next<span>👉</span>
      </Button>
    </div>
  );
}

export default Buttons;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: ReactNode;
  emoji?: string;
}

export function Button({ emoji, children, ...rest }: ButtonProps) {
  return (
    <button className={'button'} {...rest}>
      {emoji && <span>{emoji}</span>}
      {children}
    </button>
  );
}
