// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import logo from '../assets/quiz-logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Quiz logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}

export default Header;
