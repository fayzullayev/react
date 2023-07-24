import WatchedMovie from '../watched-movie';

type WatchedSummaryProps = {
  watched: any[];
};

function WatchedMovieList({ watched }: WatchedSummaryProps) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
