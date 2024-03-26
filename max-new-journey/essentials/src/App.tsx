import Header from './components/Header.tsx';
import CoreConcepts from './components/CoreConcepts.tsx';
import { CORE_CONCEPTS } from './data.ts';
import Examples from './components/Examples.tsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts coreConcepts={CORE_CONCEPTS} />
        <Examples />
      </main>
    </>
  );
}

export default App;
