interface CoreConceptProps extends CoreConceptType {}

function CoreConcept({ description, title, image }: CoreConceptProps) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
