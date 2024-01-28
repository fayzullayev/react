import { createElement } from 'react';
import PropTypes from 'prop-types';
import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

function Header({ level }) {
  console.log('Header');
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      {createElement('h1', null, 'React Essentials')}
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
