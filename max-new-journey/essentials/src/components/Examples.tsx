import TabButton from './TabButton.tsx';
import { useState } from 'react';
import { CORE_CONCEPTS } from '../data.ts';

function Examples() {
  const [activeTab, setActiveTab] = useState<string>('Components');
  function handleSelect(id: string) {
    setActiveTab(id);
  }

  let tabContent: string = 'Please click a button';

  const tab = CORE_CONCEPTS.find((c) => c.title === activeTab);

  if (tab) {
    tabContent = tab.description;
  }

  return (
    <section id={'examples'}>
      <h2>Examples</h2>
      <menu>
        <TabButton onSelect={handleSelect}>Components</TabButton>
        <TabButton onSelect={handleSelect}>JSX</TabButton>
        <TabButton onSelect={handleSelect}>Props</TabButton>
        <TabButton onSelect={handleSelect}>State</TabButton>
      </menu>
      {tabContent}
    </section>
  );
}

export default Examples;
