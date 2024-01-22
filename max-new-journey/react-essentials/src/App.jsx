import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './components/TabButton.jsx';

function App() {
  function handleSelect() {
    console.log('Hello');
  }

  return (
    <div className="hello">
      <Header level="Fundamental" />
      <main>
        <section id={'core-concepts'}>
          <h2>Core Co ncepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept {...item} key={item.description} />
            ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
