import { useState } from 'react';
import { AccordionItemType } from '../../App.tsx';
import AccordionItem from '../accordion-item';
import AccordionContent from '../accordion-item/accordion-content';

type AccordionListType = {
  accordionItems: AccordionItemType[];
};
function AccordionList({ accordionItems }: AccordionListType) {
  const [openTabNum, setOpenTabNum] = useState<number>();

  function handleSetToggle(num: number) {
    setOpenTabNum((prevState) => (prevState === num ? undefined : num));
  }

  return (
    <div className="accordion-container">
      {accordionItems.map(
        ({ title, text }: AccordionItemType, index: number) => (
          <AccordionItem
            key={text}
            number={index}
            onToggle={handleSetToggle}
            isOpen={openTabNum === index}
          >
            <AccordionContent
              text={text}
              title={title}
              isOpen={openTabNum === index}
            ></AccordionContent>
          </AccordionItem>
        ),
      )}
    </div>
  );
}

export default AccordionList;
