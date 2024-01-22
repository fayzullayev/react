import React from 'react';
import PropTypes from 'prop-types';

function TabButton({ onSelect, children }) {
  function handleClick() {
    onSelect();
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}

TabButton.propTypes = {
  children: PropTypes.elementType,
  onClick: PropTypes.func,
};

export default TabButton;
