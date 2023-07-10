import { AccordionItemType } from '../../App.tsx';
import AccordionHeader from './accordion-header';
import AccordionContent from './accordion-content';
import { useState } from 'react';

interface AccordionItemCType extends AccordionItemType {
  number: number;
}

function AccordionItem({ text, title, number }: AccordionItemCType) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSetToggle() {
    setIsOpen((prevState) => !prevState);
  }
  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <AccordionHeader number={number} isOpen={isOpen} />
      <AccordionContent
        text={text}
        title={title}
        isOpen={isOpen}
        onSetToggle={handleSetToggle}
      />
    </div>
  );
}

export default AccordionItem;
