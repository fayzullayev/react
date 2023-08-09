import { useState } from 'react';

type TextExpanderProps = {
  expanded?: boolean;
  className?: string;
  collapsedNumWords?: number;
  expandButtonText?: string;
  collapseButtonText?: string;
  buttonColor?: string;
  children: string;
};

function TextExpander({
  expandButtonText = 'Show more',
  collapseButtonText = 'Show less',
  buttonColor = 'blue',
  expanded = false,
  collapsedNumWords = 10,
  className = '',
  children,
}: TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded);

  let words: string;

  if (!isExpanded) {
    let wordsArray: string[] = children?.split(' ');
    wordsArray = wordsArray?.slice(0, collapsedNumWords);
    words = wordsArray.join(' ');
    words += '... ';
  } else {
    words = children + ' ';
  }

  function toggleExpand() {
    setIsExpanded((prevState) => !prevState);
  }

  return (
    <div className={className} style={{ margin: 10 }}>
      {words}
      <span style={{ color: buttonColor, cursor: 'pointer' }} onClick={toggleExpand}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </span>
    </div>
  );
}

export default TextExpander;
