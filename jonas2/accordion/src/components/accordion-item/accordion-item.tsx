import AccordionHeader from './accordion-header';
import { PropsWithChildren } from 'react';

interface AccordionItemCType extends PropsWithChildren {
  number: number;
  onToggle: (num: number) => void;
  isOpen: boolean;
}

function AccordionItem({
  number,
  onToggle,
  isOpen,
  children,
}: AccordionItemCType) {
  return (
    <div
      onClick={() => onToggle(number)}
      className={`accordion-item ${isOpen ? 'active' : ''}`}
    >
      <AccordionHeader number={number} isOpen={isOpen} />
      {children}
    </div>
  );
}

export default AccordionItem;
