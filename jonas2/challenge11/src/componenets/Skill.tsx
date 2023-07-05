import { SkillType } from '../App.tsx';

function getEmoji(rate: number): string {
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
      {name} {getEmoji(rate)}
    </div>
  );
}

export default Skill;
