import PropTypes from 'prop-types';
function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h3>{description}</h3>
    </li>
  );
}

CoreConcept.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CoreConcept;
