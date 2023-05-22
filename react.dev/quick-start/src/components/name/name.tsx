import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
   myName: boolean;
}

const Name = ({ myName }: ButtonProps) => {
   return (
      <div>
         my name : {myName ? 'Mirodil\n' : 'Your name\n'}
         {myName && 'Helllo'}
      </div>
   );
};

export default Name;
