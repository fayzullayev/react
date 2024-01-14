import { createBrowserRouter } from 'react-router-dom';
import Root, { loader as rootLoader } from './routes/root.tsx';
import ErrorPage from './routes/error-page.tsx';
import ContactPage from './routes/contact.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: 'contacts/:contactId',
        element: <ContactPage />,
      },
    ],
  },
]);
