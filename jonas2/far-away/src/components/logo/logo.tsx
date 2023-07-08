import { memo } from 'react';

const Logo = memo(() => {
  console.log('Logo has updated');
  return <h1>🌴Far Away🎒</h1>;
});

export default Logo;
