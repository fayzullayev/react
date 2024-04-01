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

type Players = {
  [key: string]: string;
};

export type Column = null | string;

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD: Column[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);
  const [players, setPlayers] = useState<Players>(PLAYERS);

  function handlePlayerNameChange(symbol: string, newName: string) {
    setPlayers((prevState) => {
      return {
        ...prevState,
        [symbol]: newName,
      };
    });
  }

  function handleRematch() {
    setGameTurns([]);
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

  const gameBoard = deriveGameBoard(gameTurns);
  const activePlayer = deriveActivePlayer(gameTurns);
  const winner: string | null = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  return (
    <main>
      <div id={"game-container"}>
        <ol id={"players"} className={"highlight-player"}>
          <Player
            isActive={activePlayer === "X"}
            symbol="X"
            onChangeName={handlePlayerNameChange}
            initialName={PLAYERS.X}
          />
          <Player
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
            initialName={PLAYERS.O}
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

function deriveWinner(gameBoard: Column[][], player: Players): string | null {
  let winner: string | null = null;
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
      winner = player[firstSquareSymbol];
    }
  }

  return winner;
}

function deriveGameBoard(gameTurns: Turn[]): Column[][] {
  const gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

export default App;
