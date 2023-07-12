import { PropsWithChildren } from 'react';

interface MessageType extends PropsWithChildren {
  step: number;
}

function Message({ step, children }: MessageType) {
  return (
    <div className={'message'}>
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
}

export default Message;
