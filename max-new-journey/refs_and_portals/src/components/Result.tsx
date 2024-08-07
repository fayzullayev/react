import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

type Result = {
  targetTime: number;
  timeReaming: number;
  reset: () => void;
};

export interface RefType {
  openMyDialog: () => void;
}

const Result = forwardRef<RefType, Result>(
  ({ targetTime, timeReaming, reset }, dialogRef) => {
    const dRef = useRef<HTMLDialogElement | null>(null);

    const userLost = timeReaming <= 0;

    const formattedRemainingTime = (timeReaming / 1000).toFixed(2);

    const score = Math.round((1 - timeReaming / (targetTime * 1000)) * 100);

    useImperativeHandle(dialogRef, () => ({
      openMyDialog: () => {
        if (dRef.current) {
          dRef.current.showModal();
        }
      },
    }));

    return createPortal(
      <dialog ref={dRef} className="result-modal" onClose={reset}>
        {userLost && <h2>Your lost</h2>}
        {!userLost && <h2>Your Score: {score}</h2>}
        <p>
          The target time was <strong>{targetTime} seconds</strong>
        </p>
        <p>
          You stopped the timer with{' '}
          <strong>{formattedRemainingTime} seconds left.</strong>
        </p>

        <form method="dialog" onSubmit={reset}>
          <button>Close</button>
        </form>
      </dialog>,
      document.getElementById('modal')!,
    );
  },
);

export default Result;
