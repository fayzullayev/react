import {
  Outlet,
  useLoaderData,
  Form,
  redirect,
  NavLink,
  useNavigation,
  ActionFunction,
  useSubmit,
} from 'react-router-dom';
import { createContact, getContacts } from '../contact.ts';
import { Contact } from '../types.ts';
import { useEffect, useState } from 'react';

export const loader: ActionFunction = async ({ request }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get('q') || '';
  const contacts = await getContacts(q);
  return { contacts, q };
};

export async function action() {
  const contact = await createContact();

  return redirect('/contacts/' + contact.id + '/edit');
}

export default function Root() {
  const { contacts, q } = useLoaderData() as {
    contacts: Contact[];
    q: string | null;
  };
  const navigation = useNavigation();
  const [query, setQuery] = useState(typeof q === 'string' ? q : '');
  const submit = useSubmit();

  useEffect(() => {
    if (typeof q === 'string') {
      setQuery(q);
    }
  }, [q]);

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q');

  console.log(typeof q);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              className={searching ? 'loading' : ''}
              name="q"
              value={query}
              onChange={(event) => {
                // console.log(event);
                // console.log(event.currentTarget);
                // console.log(event.currentTarget.form);
                const isFirstSearch = q == null;
                console.log('isFirstSearch', isFirstSearch);
                console.log('q', q);
                submit(event.currentTarget.form, {
                  replace: true,
                });
              }}
            />

            <div id="search-spinner" hidden={!searching} aria-hidden />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>

        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? 'active' : isPending ? 'pending' : ''
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{' '}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === 'loading' ? 'loading' : ''}
      >
        <Outlet />
      </div>
    </>
  );
}
