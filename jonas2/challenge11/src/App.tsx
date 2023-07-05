import Avatar from './componenets/Avatar.tsx';
import Intro from './componenets/Intro.tsx';
import Skills from './componenets/Skills.tsx';
import './App.css';

export type SkillType = {
  name: string;
  rate: number;
  color: string;
};

const skills: SkillType[] = [
  {
    name: 'HTML+CSS',
    rate: 5,
    color: '#2853DF',
  },
  {
    name: 'JavaScript',
    rate: 5,
    color: '#ECD318',
  },
  {
    name: 'Web Design',
    rate: 5,
    color: '#BAD7A4',
  },
  {
    name: 'Git and Github',
    rate: 4,
    color: '#E5452D',
  },
  {
    name: 'React',
    rate: 5,
    color: '#54D4F8',
  },
  {
    name: 'Svelte',
    rate: 3,
    color: '#FE3202',
  },
];
function App() {
  return (
    <div className="container">
      <Avatar />
      <Intro />
      <Skills skills={skills} />
    </div>
  );
}

export default App;
