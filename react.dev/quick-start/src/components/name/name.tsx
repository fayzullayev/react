import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
   myName: boolean;
}

const Name = ({ myName }: ButtonProps) => {
   return (
      <div>
         my name : {myName ? 'Mirodil' : 'Your name'}
         <p> {myName && 'Helllo'}</p>
      </div>
   );
};

export default Name;
