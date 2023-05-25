import Square from '../square';
import { useState } from 'react';

function Board() {
   const [square, setSquare] = useState<string[] | null[]>(Array(9).fill(null));

   function onSquareClick(index: number) {
      const nextSquares = square.slice();
      nextSquares[index] = 'X';
      setSquare(nextSquares);
   }

   return (
      <>
         <div className="board-row">
            <Square onSquareClick={() => onSquareClick(0)} value={square[0]} />
            <Square onSquareClick={() => onSquareClick(1)} value={square[1]} />
            <Square onSquareClick={() => onSquareClick(2)} value={square[2]} />
         </div>

         <div className="board-row">
            <Square onSquareClick={() => onSquareClick(3)} value={square[3]} />
            <Square onSquareClick={() => onSquareClick(4)} value={square[4]} />
            <Square onSquareClick={() => onSquareClick(5)} value={square[5]} />
         </div>

         <div className="board-row">
            <Square onSquareClick={() => onSquareClick(6)} value={square[6]} />
            <Square onSquareClick={() => onSquareClick(7)} value={square[7]} />
            <Square onSquareClick={() => onSquareClick(8)} value={square[8]} />
         </div>
      </>
   );
}

export default Board;
