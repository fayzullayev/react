import { useState } from 'react';
import Input from '../input';
import Logo from '../logo';
import NumResults from '../num-results';

function Navbar() {
  const [query, setQuery] = useState('');

  return (
    <nav className="nav-bar">
      <Logo />
      <Input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <NumResults />
    </nav>
  );
}

export default Navbar;
