import PropTypes from 'prop-types';

function Header({ level }) {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {level} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}

Header.propTypes = {
  level: PropTypes.string,
};

export default Header;
