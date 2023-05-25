import { ReactElement } from 'react';

interface SquareProps {
   value: string | null;
   onSquareClick: (index: null | string) => void;
}
function Square({ value, onSquareClick }: SquareProps): ReactElement {
   function handleClick(): void {
      // onSquareClick(value);
      onSquareClick(value);
   }

   return (
      <button onClick={handleClick} className="square">
         {value}
      </button>
   );
}

export default Square;
