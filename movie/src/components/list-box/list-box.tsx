import { useState } from 'react';
import MovieList from '../movie-list';
import { MovieItem } from '../types.ts';

type ListBoxProps = {
  movies: MovieItem[] | null;
};

function ListBox({ movies }: ListBoxProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && <MovieList movies={movies} />}
    </div>
  );
}

export default ListBox;
