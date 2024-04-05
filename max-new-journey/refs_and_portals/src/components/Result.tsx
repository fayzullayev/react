import { forwardRef, useImperativeHandle, useRef } from 'react';

type Result = {
  targetTime: number;
  result: string;
};

export interface RefType {
  openMyDialog: () => void;
}

const Result = forwardRef<RefType, Result>(
  ({ result, targetTime }, dialogRef) => {
    const dRef = useRef<HTMLDialogElement | null>(null);

    useImperativeHandle(
      dialogRef,
      () => ({
        openMyDialog: () => {
          if (dRef.current) {
            dRef.current.showModal();
          }
        },
      }),
      [],
    );

    return (
      <dialog ref={dRef} className="result-modal" open={true}>
        <h2>Your {result}</h2>
        <p>
          The target time was <strong>{targetTime}seconds</strong>
        </p>
        <p>
          You stopped the timer with <strong>X seconds left.</strong>
        </p>

        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    );
  },
);

export default Result;
