import { PropsWithChildren } from 'react';

function Main({ children }: PropsWithChildren) {
  return <main className="main">{children}</main>;
}

export default Main;
