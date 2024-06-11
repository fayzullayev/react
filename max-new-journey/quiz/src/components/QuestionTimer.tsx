import { useEffect, useState } from 'react';

type QuestionTimerProps = {
  timeout: number;
  onTimeout: () => void;
};

function QuestionTimer({ onTimeout, timeout }: QuestionTimerProps) {
  const [time, setTime] = useState<number>(timeout);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
      setTime(timeout);
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  return <progress id="question-time" value={time} max={timeout} />;
}

export default QuestionTimer;
