import { SkillType } from '../App.tsx';

function emoji(rate: number): string {
  switch (rate) {
    case 5:
      return '💪';
    case 4:
      return '👍';
    default:
      return '👶';
  }
}

function Skill({ name, rate, color }: SkillType) {
  return (
    <div className={'skill-container'} style={{ backgroundColor: color }}>
      {name} {emoji(rate)}
    </div>
  );
}

export default Skill;
