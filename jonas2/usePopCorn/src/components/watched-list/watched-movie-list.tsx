import WatchedMovie from '../watched-movie';
import { WatchedMovieItem } from '../types.ts';

type WatchedSummaryProps = {
  watched: WatchedMovieItem[];
};

function WatchedMovieList({ watched }: WatchedSummaryProps) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} {...movie} />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
