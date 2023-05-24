import { ReactElement } from 'react';
import Square from './components/square/square.tsx';

function App(): ReactElement {
   return (
      <>
         <div className="board-row">
            <Square>1</Square>
            <Square>2</Square>
            <Square>3</Square>
         </div>

         <div className="board-row">
            <Square>1</Square>
            <Square>2</Square>
            <Square>3</Square>
         </div>

         <div className="board-row">
            <Square>1</Square>
            <Square>2</Square>
            <Square>3</Square>
         </div>
      </>
   );
}

export default App;
