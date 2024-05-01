import { useEffect, useState } from 'react';

type DeleteConfirmationProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

export default function DeleteConfirmation({
  onConfirm,
  onCancel,
}: DeleteConfirmationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <Progress time={3000} />
    </div>
  );
}

function Progress({ time }: { time: number }) {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <progress style={{ width: '100%' }} value={remainingTime} max={time} />
  );
}
