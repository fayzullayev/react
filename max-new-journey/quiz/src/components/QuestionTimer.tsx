import { useEffect, useState } from 'react';

type QuestionTimerProps = {
  timeout: number;
  onTimeout: () => void;
};

function QuestionTimer({ onTimeout, timeout }: QuestionTimerProps) {
  const [time, setTime] = useState(timeout);

  useEffect(() => {
    console.log('INTERVAL');

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log('TIMEOUT');
    const timer = setTimeout(() => {
      onTimeout();
      setTime(timeout);
    }, timeout);

    return () => clearInterval(timer);
  }, [timeout, onTimeout]);

  return <progress id="question-time" value={time} max={timeout} />;
}

export default QuestionTimer;
