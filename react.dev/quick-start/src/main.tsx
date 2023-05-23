import { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import App from './App.tsx';

const root: Root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
   <StrictMode>
      <App />
   </StrictMode>
);
