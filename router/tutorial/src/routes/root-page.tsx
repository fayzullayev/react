import {
  ActionFunctionArgs,
  Form,
  LoaderFunctionArgs,
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
  useSubmit,
} from 'react-router-dom';
import { createContact, getContacts } from '../contact.ts';
import { Contact } from '../utils/types.ts';
import { useEffect, useState } from 'react';
// import { useEffect } from 'react';

export async function action(dd: ActionFunctionArgs) {
  console.log('action', dd);
  const contact = await createContact();
  console.log('contact', contact);
  return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader(
  loaderData: LoaderFunctionArgs,
): Promise<{ contacts: Contact[]; q: string | null }> {
  const url = new URL(loaderData.request.url);

  console.log('loaderData', loaderData);

  const q = url.searchParams.get('q') || '';

  const contacts = await getContacts(q);

  return { contacts, q };
}

export default function RootPage() {
  const { contacts, q } = useLoaderData() as {
    contacts: Contact[];
    q: string;
  };
  const navigation = useNavigation();
  const submit = useSubmit();

  const [query, setQuery] = useState(q);
  // console.log('inside of Root', contacts);

  useEffect(() => {
    setQuery(q);
  }, [q]);

  // if (!q) {
  //   q = '';
  // }

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q');

  return (
    <>
      <div id='sidebar'>
        <Header />
        {/*<h1>React Router Contacts</h1>*/}
        <div>
          <Form id='search-form' role='search'>
            <input
              id='q'
              className={searching ? 'loading' : ''}
              aria-label='Search contacts'
              placeholder='Search'
              type='search'
              name='q'
              value={query}
              onChange={(event) => {
                const isFirstSearch = q == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
            />
            <div id='search-spinner' aria-hidden hidden={!searching} />
            <div className='sr-only' aria-live='polite'></div>
          </Form>
          <Form method='post'>
            {/*<input type='text' name='myname' />*/}
            <button type='submit'>New</button>
          </Form>
        </div>
        <nav>
          <ul>
            {contacts.length ? (
              <ul>
                {contacts.map((contact: Contact) => (
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
          </ul>
        </nav>
      </div>
      <div
        id='detail'
        className={navigation.state === 'loading' ? 'loading' : ''}
      >
        <Outlet />
      </div>
    </>
  );
}

function Header() {
  // const contacts = useLoaderData() as Contact[];
  // console.log('inside of Header', contacts);

  // console.log(jjj);
  return <h1>React Router Contacts</h1>;
}
