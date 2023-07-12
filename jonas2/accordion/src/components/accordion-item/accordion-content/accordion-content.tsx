type AccordionContentType = {
  text: string;
  title: string;
  isOpen: boolean;
};
function AccordionContent({ text, title, isOpen }: AccordionContentType) {
  return (
    <div>
      <div className="title-container">
        <div className={`title ${isOpen ? 'active' : ''}`}>{title}</div>
        <div className={'number'}>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && <div className="content">{text}</div>}
    </div>
  );
}

export default AccordionContent;
