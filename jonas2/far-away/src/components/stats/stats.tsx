type StatsType = {
  length: number;
  progress: number;
};

function Stats({ length, progress }: StatsType) {
  return (
    <footer className="stats">
      <em>
        💼 You have {length} items on your list, and you already packed{' '}
        {(progress * 100).toFixed()}%
      </em>
    </footer>
  );
}

export default Stats;
