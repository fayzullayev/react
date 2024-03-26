import CoreConcept from './CoreConcept.tsx';

type CoreConceptsProps = {
  coreConcepts: CoreConceptsType;
};

function CoreConcepts({ coreConcepts }: CoreConceptsProps) {
  return (
    <section id={'core-concepts'}>
      <h2>Core Concepts</h2>
      <ul>
        {coreConcepts.map((concept) => (
          <CoreConcept {...concept} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
