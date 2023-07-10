type AccordionContentType = {
  text: string;
  title: string;
  isOpen: boolean;
  onSetToggle: () => void;
};
function AccordionContent({
  text,
  title,
  isOpen,
  onSetToggle,
}: AccordionContentType) {
  return (
    <div>
      <div className="title-container">
        <div className={`title ${isOpen ? 'active' : ''}`}>{title}</div>
        <div className={'number'} onClick={onSetToggle}>
          {!isOpen ? '-' : '+'}
        </div>
      </div>
      {isOpen && <div className="content">{text}</div>}
    </div>
  );
}

export default AccordionContent;
