import Flashcards from "./components/flashcards/index.ts";
import "./App.css";

export type QuestionType = {
  id: number;
  question: string;
  answer: string;
};

function App() {
  // aspectratio
  return <Flashcards />;
}

export default App;
