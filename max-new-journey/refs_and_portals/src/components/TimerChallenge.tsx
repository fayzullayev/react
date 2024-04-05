import { useRef, useState } from 'react';
import Result, { RefType } from './Result.tsx';

type TimerChallengeProps = {
  title: string;
  targetTime: number;
};

function TimerChallenge({ title, targetTime }: TimerChallengeProps) {
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const [timerExpired, setTimerExpired] = useState<boolean>(false);

  const timerRef = useRef<number>();
  const dialogRef = useRef<RefType | null>(null);

  function handleStart() {
    setTimerStarted(true);

    timerRef.current = setTimeout(() => {
      setTimerExpired(true);

      dialogRef.current?.openMyDialog();
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timerRef.current);
  }

  return (
    <>
      {timerExpired && (
        <Result ref={dialogRef} result={'lost'} targetTime={targetTime} />
      )}

      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 0 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop Challenge' : 'Start Challenge'}
          </button>
        </p>

        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
