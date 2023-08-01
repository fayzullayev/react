import { PropsWithChildren, ReactNode, useState } from 'react';

type BoxProps = {
  element?: ReactNode;
} & PropsWithChildren;

function Box({ element }: BoxProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && element}
    </div>
  );
}

export default Box;
