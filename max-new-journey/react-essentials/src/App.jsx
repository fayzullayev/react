import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import TabButton from './components/TabButton.jsx';

function App() {
  const [activeTab, setActiveTab] = useState('');

  console.log(activeTab);
  return (
    <div className="hello">
      <Header level="Fundamental" />
      <main>
        <section id={'core-concepts'}>
          <h2>Core Concepts</h2>
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
            {CORE_CONCEPTS.map((item) => (
              <TabButton
                key={item.title}
                isActive={activeTab === item.title.toLowerCase()}
                onSelect={() => setActiveTab(item.title.toLowerCase())}
              >
                {item.title}
              </TabButton>
            ))}
          </menu>
          <div className="tab">
            {activeTab ? (
              <>
                <h3>{EXAMPLES[activeTab].title}</h3>
                <p>{EXAMPLES[activeTab].description}</p>
                <pre>
                  <code>{EXAMPLES[activeTab].code}</code>
                </pre>
              </>
            ) : (
              <p>Please select a topic.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
