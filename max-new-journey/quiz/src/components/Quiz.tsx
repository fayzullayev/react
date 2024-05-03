import { useCallback, useState } from 'react';
import { questions } from '../questions.ts';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.tsx';

function Quiz() {
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);

  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback((selectedAnswer: string | null) => {
    setUserAnswers((prevState) => [...prevState, selectedAnswer]);
  }, []);

  const quizIsComplete = activeQuestionIndex === questions.length;

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Tropy icon" />
        <h2>Quiz completed</h2>
      </div>
    );
  }

  const shuffledAnswers = [...questions[activeQuestionIndex].answers];

  shuffledAnswers.sort(() => Math.random() - 0.5);

  const skipAnswer = useCallback(() => handleSelectAnswer(null), []);

  return (
    <div id="quiz">
      <div className="question">
        <QuestionTimer timeout={2000} onTimeout={skipAnswer} />
        <h2>{questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
