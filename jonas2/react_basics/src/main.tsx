import React from 'react';
import { Root, createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const element: HTMLDivElement = document.getElementById(
  'root'
) as HTMLDivElement;

const root: Root = createRoot(element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
