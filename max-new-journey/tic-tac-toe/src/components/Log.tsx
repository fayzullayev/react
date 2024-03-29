import { Turn } from "../App.tsx";

type LogProps = {
  turns: Turn[];
};

function Log({ turns }: LogProps) {
  return (
    <ol id={"log"}>
      {turns.map((turn) => (
        <li key={`{${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}

export default Log;
