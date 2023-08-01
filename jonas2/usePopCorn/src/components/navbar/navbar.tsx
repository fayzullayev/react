import { PropsWithChildren } from 'react';
import Logo from '../logo';
import Search from '../search';

function Navbar({ children }: PropsWithChildren) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      {children}
    </nav>
  );
}

export default Navbar;
