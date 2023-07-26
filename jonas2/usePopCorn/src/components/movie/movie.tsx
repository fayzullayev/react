import { MovieItem } from '../types.ts';

function Movie({ imdbID, year, title, poster }: MovieItem) {
  return (
    <li key={imdbID}>
      <img src={poster} alt={`${title} poster`} />
      <h3>{title}</h3>
      <div>
        <p>
          <span>📅</span>
          <span>{year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
