import { ComponentType, ReactNode } from 'react';
import { JSX } from 'react/jsx-runtime';
import IntrinsicElements = JSX.IntrinsicElements;

type TabsProps = {
  children: ReactNode;
  buttons: ReactNode;
  buttonsContainer?: keyof IntrinsicElements | ComponentType<any>;
};

function Tabs({ children, buttons, buttonsContainer = 'menu' }: TabsProps) {
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

export default Tabs;
