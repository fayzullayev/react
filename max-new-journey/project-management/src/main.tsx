import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ProjectsProvider } from './projects-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProjectsProvider>
    <App />
  </ProjectsProvider>,
);
