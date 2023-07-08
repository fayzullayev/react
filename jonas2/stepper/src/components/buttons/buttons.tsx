type ButtonsType = {
  step: number;
  onClick: (isPrev?: boolean) => void;
};
function Buttons({ step, onClick }: ButtonsType) {
  const isFirst = step === 1;
  const isLast = step === 3;

  return (
    <div className={'buttons'}>
      <button
        disabled={isFirst}
        onClick={() => onClick(true)}
        style={{
          backgroundColor: isFirst ? '#9a969a' : '#7950f2',
          color: '#fff',
        }}
      >
        Previous
      </button>
      <button
        disabled={isLast}
        onClick={() => onClick()}
        style={{
          backgroundColor: isLast ? '#9a969a' : '#7950f2',
          color: '#fff',
        }}
      >
        Next
      </button>{' '}
    </div>
  );
}

export default Buttons;
