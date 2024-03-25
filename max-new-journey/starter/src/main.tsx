import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

function myFunc(cb: () => void) {
  setTimeout(() => {
    cb();
  }, 2000);
}

const cb = () => {
  console.log('Hello');
};

myFunc(cb);

console.log(1234);
