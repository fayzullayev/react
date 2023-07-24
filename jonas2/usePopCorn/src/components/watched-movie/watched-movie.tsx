import { WatchedMovieItem } from '../types.ts';

function WatchedMovie({
  title,
  imdbRating,
  userRating,
  imdbID,
  runtime,
  poster,
}: WatchedMovieItem) {
  return (
    <li key={imdbID}>
      <img src={poster} alt={`${title} poster`} />
      <h3>{title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{runtime} min</span>
        </p>
      </div>
    </li>
  );
}

export default WatchedMovie;
