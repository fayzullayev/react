import { useState } from 'react';
import StepNumbers from './components/step-numbers';
import Message from './components/message';
import Buttons from './components/buttons';

function App() {
  const [step, setStep] = useState<number>(1);

  function clickHandler(isPrev?: boolean) {
    setStep((prevState: number) => {
      return prevState + (isPrev ? -1 : 1);
    });
  }

  return (
    <div className={'steps'}>
      <StepNumbers step={step} />

      <Message step={step} />

      <Buttons step={step} onClick={clickHandler} />
    </div>
  );
}

export default App;
