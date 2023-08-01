import Input from '../input';
import { ChangeEvent, useState } from 'react';

function Search() {
  const [query, setQuery] = useState<string>('');

  return (
    <div>
      <Input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
    </div>
  );
}

export default Search;
