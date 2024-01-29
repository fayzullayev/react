import { useState } from 'react';
import TabButton from './TabButton.jsx';
import { CORE_CONCEPTS, EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

function Examples() {
  const [activeTab, setActiveTab] = useState('');

  return (
    <Section id={'examples'} title={'Examples'}>
      <Tabs
        buttons={CORE_CONCEPTS.map((item) => (
          <TabButton
            key={item.title}
            isActive={activeTab === item.title.toLowerCase()}
            onClick={() => setActiveTab(item.title.toLowerCase())}
          >
            {item.title}
          </TabButton>
        ))}
      >
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
      </Tabs>
    </Section>
  );
}

export default Examples;
