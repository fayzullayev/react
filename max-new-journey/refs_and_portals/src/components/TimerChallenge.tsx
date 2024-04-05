import { useRef, useState } from 'react';
import Result, { RefType } from './Result.tsx';

type TimerChallengeProps = {
  title: string;
  targetTime: number;
};

function TimerChallenge({ title, targetTime }: TimerChallengeProps) {
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const [timerExpired, setTimerExpired] = useState<boolean>(false);

  const timerRef = useRef<number | null>(null);
  const dialogRef = useRef<RefType | null>(null);

  const [timeReaming, setTimeReaming] = useState<number>(targetTime * 1000);

  const timerIsActive = timeReaming > 0 && timeReaming < targetTime * 1000;

  if (timeReaming <= 0) {
    handleStop();
    if (dialogRef.current) {
      dialogRef.current.openMyDialog();
    }
  }

  function handleReset() {
    setTimeReaming(targetTime * 1000);
  }

  function handleStart() {
    setTimerStarted(true);

    timerRef.current = setInterval(() => {
      setTimeReaming((prevState) => prevState - 10);
    }, 10);
  }

  function handleStop() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (dialogRef.current) {
      dialogRef.current.openMyDialog();
    }
  }

  return (
    <>
      <Result
        ref={dialogRef}
        targetTime={targetTime}
        timeReaming={timeReaming}
        reset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 0 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop Challenge' : 'Start Challenge'}
          </button>
        </p>

        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
