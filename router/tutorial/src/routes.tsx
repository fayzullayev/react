import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import RootPage, {
  loader as rootLoader,
  action as rootAction,
} from './routes/root-page.tsx';

import ErrorPage from './routes/error-page.tsx';

import ContactPage, {
  loader as contactPageLoader,
  action as contactPageAction,
} from './routes/contact-page.tsx';

import ContactEditPage, {
  action as contactEditPageAction,
} from './routes/contact-edit-page.tsx';

import { action as deletePageAction } from './routes/contact-delete-page.tsx';
import Index from './routes/index.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    loader: rootLoader,
    action: rootAction,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: 'contacts',
            element: <Outlet />,
            children: [
              {
                index: true,
                element: <h2>Choose a contact</h2>,
              },
              {
                path: ':contactId',
                element: <Outlet />,
                children: [
                  {
                    index: true,
                    element: <ContactPage />,
                    loader: contactPageLoader,
                    action: contactPageAction,
                  },
                  {
                    path: 'edit',
                    element: <ContactEditPage />,
                    loader: contactPageLoader,
                    action: contactEditPageAction,
                  },
                  {
                    path: 'destroy',
                    action: deletePageAction,
                    element: <Outlet />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

export const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<RootPage />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index={true} element={<Index />}></Route>
        <Route path='contacts'>
          <Route index={true} element={<h2>Choose a contact</h2>}></Route>
          <Route path=':contactId'>
            <Route
              index={true}
              element={<ContactPage />}
              loader={contactPageLoader}
              action={contactPageAction}
            ></Route>

            <Route
              path='edit'
              element={<ContactEditPage />}
              loader={contactPageLoader}
              action={contactEditPageAction}
            ></Route>

            <Route path='destroy' action={deletePageAction}></Route>
          </Route>
        </Route>
      </Route>
    </Route>,
  ),
);
