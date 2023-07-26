import { useState } from 'react';
import Navbar from './components/navbar';
import Main from './components/main/';
import { MovieItem } from './components/types.ts';
import NumResults from './components/num-results';
import ListBox from './components/list-box';

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

export default function App() {
  const [movies] = useState<MovieItem[] | null>(tempMovieData);

  return (
    <>
      <Navbar>
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <ListBox movies={movies} />
      </Main>
    </>
  );
}
