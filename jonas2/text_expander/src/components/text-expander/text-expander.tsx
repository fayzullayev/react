import { useState } from "react";

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
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
  collapsedNumWords = 10,
  className = "",
  children,
}: TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded);

  let words;

  if (!isExpanded) {
    const wordsArray = children?.split(" ");
    words = wordsArray?.slice(0, collapsedNumWords);
    words = words.join(" ");
    words += "... ";
  } else {
    words = children + " ";
  }

  return (
    <div className={className}>
      {words}
      {isExpanded ? (
        <span onClick={() => setIsExpanded(false)}>{collapseButtonText}</span>
      ) : (
        <span onClick={() => setIsExpanded(true)}>{expandButtonText}</span>
      )}
      <hr />
    </div>
  );
}

export default TextExpander;
