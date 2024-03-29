import Player from "./components/Player.tsx";
import { useState } from "react";
import GameBoard from "./components/GameBoard.tsx";
import Log from "./components/Log.tsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.ts";
import GameOver from "./components/GameOver.tsx";

type Square = {
  row: number;
  col: number;
};

export type Turn = {
  square: Square;
  player: string;
};

export type Column = null | string;

const initialGameBoard: Column[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [rightUser, setRightUser] = useState<string>("Player 1");
  const [leftUser, setLeftUser] = useState<string>("Player 2");
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let winner: string | null = null;

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      return [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
    });
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRematch() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id={"game-container"}>
        <ol id={"players"} className={"highlight-player"}>
          <Player
            name={rightUser}
            isActive={activePlayer === "X"}
            setName={setRightUser}
            symbol="X"
          />
          <Player
            name={leftUser}
            setName={setLeftUser}
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver onRematch={handleRematch} winner={winner} />
        )}
        <GameBoard gameBoard={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

function deriveActivePlayer(gameTurns: Turn[]): string {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

export default App;
