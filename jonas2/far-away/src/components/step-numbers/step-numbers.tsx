type StepNumbersType = {
  step: number;
};
function StepNumbers({ step }: StepNumbersType) {
  return (
    <div className="numbers">
      <div className={`btn ${step >= 1 ? 'active' : ''}`}>1</div>
      <div className={`btn ${step >= 2 ? 'active' : ''}`}>2</div>
      <div className={`btn ${step >= 3 ? 'active' : ''}`}>3</div>
    </div>
  );
}

export default StepNumbers;
