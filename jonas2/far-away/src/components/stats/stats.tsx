type StatsType = {
  length: number;
  percentOfPacked: number;
  packedItem: number;
};

function Stats({ length, percentOfPacked, packedItem }: StatsType) {
  if (packedItem === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  return (
    <footer className="stats">
      {percentOfPacked === 1 ? (
        <em>You got everything. Ready to go ✈️!</em>
      ) : (
        <em>
          💼 You have {length} items on your list, and you already packed{' '}
          {packedItem} ({(percentOfPacked * 100).toFixed()}%)
        </em>
      )}
    </footer>
  );
}

export default Stats;
