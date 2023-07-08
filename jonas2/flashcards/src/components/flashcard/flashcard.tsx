import { QuestionType } from "../../App.tsx";

interface FlashCardType extends QuestionType {
  onClick: (id: number) => void;
  isSelected: boolean;
}

export default function FlashCard({
  onClick,
  id,
  isSelected,
  answer,
  question,
}: FlashCardType) {
  return (
    <div onClick={() => onClick(id)} className={isSelected ? "selected" : ""}>
      {!isSelected ? <span>{question}</span> : <span>{answer}</span>}
    </div>
  );
}
