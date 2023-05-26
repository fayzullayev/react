import Square from '../square';
import { ReactElement, useState } from 'react';

function Board() {
   const [squares, setSquare] = useState<string[] | null[]>(Array(9).fill(null));
   const [xIsNext, setXIsNext] = useState<boolean>(true);
   const winner = calculateWinner(squares);

   let status: string;

   if (winner) {
      status = 'Winner: ' + winner;
   } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
   }

   function handleClick(index: number) {
      if (squares[index] || winner) {
         return;
      }

      const nextSquares = squares.slice();
      nextSquares[index] = xIsNext ? 'X' : 'O';
      setSquare(nextSquares);
      setXIsNext((prevState) => !prevState);
   }

   function getRows(start: number, end: number): ReactElement[] {
      const rows: ReactElement[] = [];

      for (let i: number = start; i <= end; i++) {
         rows.push(<Square key={i} onSquareClick={() => handleClick(i)} value={squares[i]} />);
      }

      return rows;
   }

   function getBoard(): ReactElement[] {
      const rows: ReactElement[] = [];
      let start = 0;
      let end = 2;

      for (let i = 0; i < 3; i++) {
         rows.push(
            <div key={i} className="board-row">
               {getRows(start, end)}
            </div>
         );
         start += 3;
         end += 3;
      }

      return rows;
   }

   return (
      <>
         <div className="status">{status}</div>
         {getBoard()}
      </>
   );
}

function calculateWinner(squares: string[] | null[]) {
   const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];
   for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
         return squares[a];
      }
   }
   return null;
}

export default Board;
