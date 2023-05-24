import { PropsWithChildren, ReactElement } from 'react';

function Square({ children }: PropsWithChildren): ReactElement {
   return <button className="square">{children}</button>;
}

export default Square;
