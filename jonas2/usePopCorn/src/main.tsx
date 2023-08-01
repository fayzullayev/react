import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
// import './index.css';
import Star from './components/star';

const element = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <Star maxRating={10} defaultRating={4} />
    <Star maxRating={7} size={24} color={'blue'} />
    <Star size={96} color={'purple'} />
  </React.StrictMode>,
);
