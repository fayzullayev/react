import { useCallback, useState } from 'react';
import { questions } from '../questions.ts';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.tsx';

function Quiz() {
  const [answerState, setAnswerState] = useState<string>('');
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);

  const activeQuestionIndex =
    answerState == '' ? userAnswers.length : userAnswers.length - 1;

  const handleSelectAnswer = useCallback(
    (selectedAnswer: string | null) => {
      setAnswerState('answered');
      setUserAnswers((prevState) => [...prevState, selectedAnswer]);

      setTimeout(() => {
        if (selectedAnswer === questions[activeQuestionIndex].answers[0]) {
          setAnswerState('correct');
        } else {
          setAnswerState('wrong');
        }

        setTimeout(() => {
          setAnswerState('');
        }, 2000);
      }, 1000);
    },

    [activeQuestionIndex],
  );

  const quizIsComplete = activeQuestionIndex === questions.length;

  const shuffledAnswers = [...questions[activeQuestionIndex].answers];

  shuffledAnswers.sort(() => Math.random() - 0.5);

  const skipAnswer = useCallback(() => handleSelectAnswer(null), []);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Tropy icon" />
        <h2>Quiz completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <div className="question">
        <QuestionTimer timeout={5000} onTimeout={skipAnswer} />
        <h2>{questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClass = '';

            if (answerState === 'answered' && isSelected) {
              cssClass = 'selected';
            }

            if (
              (answerState === 'correct' || answerState === 'wrong') &&
              isSelected
            ) {
              cssClass = answerState;
            }

            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={cssClass}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
