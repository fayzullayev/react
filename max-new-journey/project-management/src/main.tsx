import ReactDOM from 'react-dom/client';
import { ProjectsProvider } from './projects-context.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProjectsProvider>
    <RouterProvider router={router} />
  </ProjectsProvider>,
);
