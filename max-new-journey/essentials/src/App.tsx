import Header from './components/Header.tsx';
import CoreConcepts from './components/CoreConcepts.tsx';
import Examples from './components/Examples.tsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
