import { useState } from 'react';
import StepNumbers from './components/step-numbers';
import Message from './components/message';
import Buttons from './components/buttons';

function App() {
  const [step, setStep] = useState<number>(1);
  const [test, setTest] = useState({ name: 'Mirodil' });
  const [isOpen, setIsOpen] = useState<boolean>(true);
  function handlerClick(isPrev?: boolean) {
    setStep((prevState: number) => {
      return prevState + (isPrev ? -1 : 1);
    });

    // BAD PRACTISE
    setTest({ ...test, name: 'Odil' });
  }

  function toggleOpen() {
    setIsOpen((prevState: boolean) => !prevState);
  }

  return (
    <>
      <div className="close" onClick={toggleOpen}>
        &times;
      </div>
      {isOpen && (
        <div className={'steps'}>
          <StepNumbers step={step} />
          <Message step={step} />
          <Buttons step={step} onClick={handlerClick} />
        </div>
      )}
    </>
  );
}

export default App;
