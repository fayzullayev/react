import { useState } from 'react';
import TabButton from '../TabButton.jsx';
import { CORE_CONCEPTS, EXAMPLES } from '../../data.js';

function Examples() {
  const [activeTab, setActiveTab] = useState('');

  return (
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
  );
}

export default Examples;
