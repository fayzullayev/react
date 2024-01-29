import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';
import Section from './Section.jsx';

function CoreConcepts() {
  return (
    <Section id={'core-concepts'} title={'Core Concepts'}>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept {...item} key={item.description} />
        ))}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
