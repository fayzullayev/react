import { memo } from 'react';

type TabButtonProps = {
  label: string;
  onSelect: (id: string) => void;
  isActive: boolean;
};

export default memo(function TabButton({
  onSelect,
  isActive,
  label,
}: TabButtonProps) {
  return (
    <li>
      <button
        className={isActive ? 'active' : ''}
        onClick={() => onSelect(label)}
      >
        {label}
      </button>
    </li>
  );
});
