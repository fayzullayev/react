type NumResultsProps = {
  count: number | undefined;
};
function NumResults({ count }: NumResultsProps) {
  return (
    <p className="num-results">
      Found <strong>{count ?? 0}</strong> results
    </p>
  );
}

export default NumResults;
