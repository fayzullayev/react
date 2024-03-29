import { Column } from "../App.tsx";

type GameBoard = {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  gameBoard: Column[][];
};

function GameBoard({ onSelectSquare, gameBoard }: GameBoard) {
  return (
    <ol id={"game-board"}>
      {gameBoard.map((row, index) => (
        <li key={index}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(index, colIndex)}
                  disabled={!!playerSymbol}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
