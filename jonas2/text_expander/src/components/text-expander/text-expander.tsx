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

  let words: string;

  if (!isExpanded) {
    let wordsArray: string[] = children?.split(" ");
    wordsArray = wordsArray?.slice(0, collapsedNumWords);
    words = wordsArray.join(" ");
    words += "...";
  } else {
    words = children;
  }

  return (
    <div>
      {words}
      {/*{isExpanded ?}*/}
      <hr />
    </div>
  );
}

export default TextExpander;
