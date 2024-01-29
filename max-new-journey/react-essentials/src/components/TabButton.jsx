import PropTypes from 'prop-types';

function TabButton({ isActive, children, ...props }) {
  return (
    <li>
      <button className={isActive ? 'active' : ''} {...props}>
        {children}
      </button>
    </li>
  );
}

TabButton.propTypes = {
  children: PropTypes.elementType.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default TabButton;
