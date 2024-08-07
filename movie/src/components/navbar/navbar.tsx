import { PropsWithChildren, useState } from 'react';
import Input from '../input';
import Logo from '../logo';

function Navbar({ children }: PropsWithChildren) {
  const [query, setQuery] = useState<string>('');

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
      {children}
    </nav>
  );
}

export default Navbar;
