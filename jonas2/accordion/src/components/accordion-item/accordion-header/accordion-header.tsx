type AccordionHeaderType = {
  number: number;
  isOpen: boolean;
};

function AccordionHeader({ number, isOpen }: AccordionHeaderType) {
  return (
    <div className={`accordion-header ${isOpen ? 'active' : ''}`}>
      0{number + 1}
    </div>
  );
}

export default AccordionHeader;
