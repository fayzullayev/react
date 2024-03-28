import TabButton from './TabButton.tsx';
import { useCallback, useState } from 'react';
import { EXAMPLES } from '../data.ts';

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
    <section id={'examples'}>
      <h2>Examples</h2>
      <menu>
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
      </menu>
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
    </section>
  );
}

export default Examples;
