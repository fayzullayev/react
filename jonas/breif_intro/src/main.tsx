import ReactDOM, { Root } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root: HTMLElement = document.getElementById('root') as HTMLElement;
const app: Root = ReactDOM.createRoot(root);

app.render(<App />);
