import { ReactElement } from 'react';

interface SquareProps {
   value: string | null;
   onSquareClick: () => void;
}
function Square({ value, onSquareClick }: SquareProps): ReactElement {
   console.log('value : ', value);
   function handleClick(): void {
      // onSquareClick(value);
      onSquareClick();
   }

   return (
      <button onClick={handleClick} className="square">
         {value}
      </button>
   );
}

export default Square;
