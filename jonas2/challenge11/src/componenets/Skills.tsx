import { SkillType } from '../App.tsx';
import Skill from './Skill.tsx';

type SkillsType = {
  skills: SkillType[];
};

function Skills({ skills }: SkillsType) {
  return (
    <div className={'skills-container'}>
      {skills.map((skill: SkillType) => (
        <Skill {...skill} />
      ))}
    </div>
  );
}

export default Skills;
