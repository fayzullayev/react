import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router2 } from './pages/router.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router2} />,
);
