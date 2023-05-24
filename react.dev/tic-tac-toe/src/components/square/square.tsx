import { ReactElement, useState } from 'react';

// interface SquareProps extends PropsWithChildren {
//    value: number;
// }
function Square(): ReactElement {
   const [value, setValue] = useState<string | undefined>();
   function handleClick(): void {
      setValue('X');
   }

   return (
      <button onClick={handleClick} className="square">
         {value}
      </button>
   );
}

export default Square;
