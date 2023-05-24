import { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container: HTMLDivElement = document.getElementById('root') as HTMLDivElement;

const root: Root = createRoot(container);

root.render(
   <StrictMode>
      <App />
   </StrictMode>
);
