import TabButton from './TabButton.tsx';
import { useCallback, useState } from 'react';
import { EXAMPLES } from '../data.ts';
import Section from './Section.tsx';
import Tabs from './Tabs.tsx';

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleSelect = useCallback(function (id: string) {
    setSelectedTopic(id);
  }, []);

  let example: ExampleType | null = null;

  if (selectedTopic) {
    example = EXAMPLES[selectedTopic.toLowerCase()];
  }

  return (
    <Section id={'examples'} title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isActive={selectedTopic === 'Components'}
              onSelect={handleSelect}
              label="Components"
            />
            <TabButton
              isActive={selectedTopic === 'JSX'}
              onSelect={handleSelect}
              label="JSX"
            />
            <TabButton
              isActive={selectedTopic === 'Props'}
              onSelect={handleSelect}
              label="Props"
            />
            <TabButton
              isActive={selectedTopic === 'State'}
              onSelect={handleSelect}
              label="State"
            />
          </>
        }
      >
        {example ? (
          <div id={'tab-content'}>
            <h3>{example.title}</h3>
            <p>{example.description}</p>
            <pre>
              <code>{example.code}</code>
            </pre>
          </div>
        ) : (
          'Please select a topic'
        )}
      </Tabs>
    </Section>
  );
}

export default Examples;
