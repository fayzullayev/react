export type MovieItem = {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
};

export interface WatchedMovieItem extends MovieItem {
  runtime: number;
  imdbRating: number;
  userRating: number;
}
