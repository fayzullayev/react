import { AccordionItemType } from '../../App.tsx';
import AccordionItem from '../accordion-item';

type AccordionListType = {
  accordionItems: AccordionItemType[];
};
function AccordionList({ accordionItems }: AccordionListType) {
  return (
    <div className="accordion-container">
      {accordionItems.map(
        (accordionItems: AccordionItemType, index: number) => (
          <AccordionItem
            key={accordionItems.text}
            {...accordionItems}
            number={index}
          />
        ),
      )}
    </div>
  );
}

export default AccordionList;
