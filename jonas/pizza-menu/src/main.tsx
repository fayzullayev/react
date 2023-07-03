import { createRoot, Root } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root: HTMLDivElement = document.getElementById('root') as HTMLElement;
const app: Root = createRoot(root);

app.render(<App />);
