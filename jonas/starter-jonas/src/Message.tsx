type MessageProps = {
  count: number;
};

function Message({ count }: MessageProps) {
  return (
    <p>
      You have read <strong>{count}</strong> piece{count > 1 ? 's' : ''} of
      advice
    </p>
  );
}

export default Message;
