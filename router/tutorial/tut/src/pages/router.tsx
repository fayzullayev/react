import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Root, { loader as rootLoader, action as rootAction } from './root.tsx';
import ErrorPage from './error.tsx';
import ContactPage, {
  loader as contactPageLoader,
  action as contactPageAction,
} from './contact.tsx';
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
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: 'contacts/:contactId',
            element: <ContactPage />,
            loader: contactPageLoader,
            action: contactPageAction,
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
    ],
  },
]);

export const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      errorElement={<ErrorPage />}
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index={true} element={<Index />} />

        <Route path={'contacts/:contactId/*'}>
          <Route
            index={true}
            element={<ContactPage />}
            loader={contactPageLoader}
            action={contactPageAction}
          />
          <Route
            path={'edit'}
            element={<EditContact />}
            loader={contactPageLoader}
            action={editContactPageAction}
          />

          <Route path={'destroy'} action={destroyAction} />
        </Route>
      </Route>
    </Route>,
  ),
);
