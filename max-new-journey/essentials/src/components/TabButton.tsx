import { ReactNode, memo } from 'react';

type TabButtonProps = {
  children: ReactNode;
  onSelect: (id: string) => void;
};

function TabButton({ onSelect, children }: TabButtonProps) {
  console.log(children);
  return (
    <li>
      <button onClick={() => onSelect(children as string)}>{children}</button>
    </li>
  );
}

export default memo(TabButton);
