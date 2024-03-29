type GameOverProps = {
  winner: string | null;
  onRematch: () => void;
};

function GameOver({ winner, onRematch }: GameOverProps) {
  return (
    <div id={"game-over"}>
      <h2>GameOver</h2>
      {winner ? <p>{winner} won!</p> : <p>It's a draw</p>}
      <p>
        <button onClick={onRematch}>Rematch</button>
      </p>
    </div>
  );
}

export default GameOver;
