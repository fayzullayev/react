import { useState } from 'react';
import { AccordionItemType } from '../../App.tsx';
import AccordionHeader from './accordion-header';
import AccordionContent from './accordion-content';

interface AccordionItemCType extends AccordionItemType {
  number: number;
}

function AccordionItem({ text, title, number }: AccordionItemCType) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSetToggle() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div
      onClick={handleSetToggle}
      className={`accordion-item ${isOpen ? 'active' : ''}`}
    >
      <AccordionHeader number={number} isOpen={isOpen} />
      <AccordionContent text={text} title={title} isOpen={isOpen} />
    </div>
  );
}

export default AccordionItem;
