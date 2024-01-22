import PropTypes from 'prop-types';
import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

function Header({ level }) {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {level} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}

Header.propTypes = {
  level: PropTypes.string.isRequired,
};

export default Header;
