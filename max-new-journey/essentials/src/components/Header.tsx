import reactImg from '../assets/react-core-concepts.png';
import { memo } from 'react';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max: number): number {
  return Math.floor(Math.random() * (max + 1));
}
export default memo(function Header() {
  const label = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>

      <p>
        {label} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
});
