import { useState } from "react";
import FlashCard from "../flashcard/index.ts";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function Flashcards() {
  const [selectedId, setSelectedId] = useState<number | null>();

  function handleClick(id: number) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <FlashCard
          key={question.id}
          isSelected={selectedId === question.id}
          onClick={handleClick}
          {...question}
        />
      ))}
    </div>
  );
}

export default Flashcards;
