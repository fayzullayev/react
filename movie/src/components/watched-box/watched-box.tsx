import { useState } from 'react';
import WatchedSummary from '../watched-summary';
import WatchedMovieList from '../watched-list';
import { WatchedMovieItem } from '../types.ts';

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

function WatchedBox() {
  const [watched] = useState(tempWatchedData);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
}

export default WatchedBox;
