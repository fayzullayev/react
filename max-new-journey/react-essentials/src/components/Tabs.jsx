import React from 'react';
import { CORE_CONCEPTS } from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';

function Tabs({ children, buttons, ButtonContainer = 'menu' }) {
  // const ButtonContainer = 'menu';
  return (
    <>
      {/*{React.createElement(buttonContainer, null, buttons)}*/}
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}

export default Tabs;
