import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <>
      <Header level="Fundamental" />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
