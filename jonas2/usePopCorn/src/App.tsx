import { useState } from 'react';
import Navbar from './components/navbar';
import Main from './components/main/';
import { MovieItem, WatchedMovieItem } from './components/types.ts';
import NumResults from './components/num-results';
import Box from './components/box';
import MovieList from './components/movie-list';
import WatchedSummary from './components/watched-summary';
import WatchedMovieList from './components/watched-list';
import Star from './components/star';

const tempMovieData: MovieItem[] = [
  {
    imdbID: 'tt1375666',
    title: 'Inception',
    year: '2010',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt0133093',
    title: 'The Matrix',
    year: '1999',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt6751668',
    title: 'Parasite',
    year: '2019',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
  },
];

const tempWatchedData: WatchedMovieItem[] = [
  {
    imdbID: 'tt1375666',
    title: 'Inception',
    year: '2010',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: 'tt0088763',
    title: 'Back to the Future',
    year: '1985',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export default function App() {
  const [movies] = useState<MovieItem[] | null>(tempMovieData);
  const [watched] = useState(tempWatchedData);

  return (
    <>
      {/*<Navbar>*/}
      {/*  <NumResults count={movies?.length} />*/}
      {/*</Navbar>*/}
      {/*<Main>*/}
      {/*  <Box>*/}
      {/*    <MovieList movies={movies} />*/}
      {/*  </Box>*/}
      {/*  <Box>*/}
      {/*    <WatchedSummary watched={watched} />*/}
      {/*    <WatchedMovieList watched={watched} />*/}
      {/*  </Box>*/}
      {/*</Main>*/}
    </>
  );
}
