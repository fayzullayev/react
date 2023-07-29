import Movie from '../movie';
import { MovieItem } from '../types.ts';

type MovieListProps = {
  movies: MovieItem[] | null;
};
function MovieList({ movies }: MovieListProps) {
  return (
    <ul className="list">
      {movies?.map((movie) => <Movie key={movie.imdbID} {...movie} />)}
    </ul>
  );
}

export default MovieList;
