import { ReactElement } from 'react';
import Square from './components/square/square.tsx';

function App(): ReactElement {
   return (
      <div>
         <Square />
         <Square />
         <Square />
      </div>
   );
}

export default App;
