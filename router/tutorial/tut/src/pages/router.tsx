import { createBrowserRouter } from 'react-router-dom';
import Root, { loader as rootLoader, action as rootAction } from './root.tsx';
import ErrorPage from './error.tsx';
import ContactPage, { loader as contactPageLoader } from './contact.tsx';
import EditContact, {
  action as editContactPageAction,
} from './contact-edit.tsx';

import { action as destroyAction } from './destroy.tsx';
import Index from './home.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'contacts/:contactId',
        element: <ContactPage />,
        loader: contactPageLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactPageLoader,
        action: editContactPageAction,
      },
      {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
]);
