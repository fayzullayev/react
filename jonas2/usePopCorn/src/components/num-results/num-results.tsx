import { MovieItem } from '../types.ts';

type NumResultsProps = {
  movies: MovieItem[] | null;
};
function NumResults({ movies }: NumResultsProps) {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
}

export default NumResults;
