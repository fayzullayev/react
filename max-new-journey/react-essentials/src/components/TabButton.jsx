import PropTypes from 'prop-types';

function TabButton({ onSelect, isActive, children }) {
  function handleClick() {
    onSelect();
  }

  return (
    <li>
      <button className={isActive ? 'active' : ''} onClick={handleClick}>
        {children}
      </button>
    </li>
  );
}

TabButton.propTypes = {
  children: PropTypes.elementType.isRequired,
  onSelect: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default TabButton;
