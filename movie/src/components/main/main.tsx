import { PropsWithChildren } from 'react';
import WatchedBox from '../watched-box';

function Main({ children }: PropsWithChildren) {
  return (
    <main className="main">
      {children}
      <WatchedBox />
    </main>
  );
}

export default Main;
