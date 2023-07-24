import { useState } from 'react';
import MovieList from '../movie-list';

function ListBox() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && <MovieList />}
    </div>
  );
}

export default ListBox;
