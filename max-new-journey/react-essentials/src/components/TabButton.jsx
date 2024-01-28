import PropTypes from 'prop-types';

function TabButton({ onSelect, isActive, children }) {
  return (
    <li>
      <button className={isActive ? 'active' : ''} onClick={onSelect}>
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
