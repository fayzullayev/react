const messages: string[] = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

type MessageType = {
  step: number;
};

function Message({ step }: MessageType) {
  return (
    <p className={'message'}>
      Step {step} : {messages[step - 1]}
    </p>
  );
}

export default Message;
