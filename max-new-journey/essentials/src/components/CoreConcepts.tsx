import CoreConcept from './CoreConcept.tsx';
import { CORE_CONCEPTS } from '../data.ts';

function CoreConcepts() {
  return (
    <section id={'core-concepts'}>
      <h2>Core Concepts</h2>

      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
