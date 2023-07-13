import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const element = document.getElementById('root') as HTMLDivElement;

const root = createRoot(element);

root.render(<App />);
