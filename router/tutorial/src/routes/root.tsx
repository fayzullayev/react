import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { getContacts } from '../contact.ts';
import { Contact } from '../utils/types.ts';

export async function loader(): Promise<Contact[]> {
  const contacts: Contact[] = await getContacts();

  console.log('inside of loader', contacts);

  const contacts2: Contact[] = [
    ...contacts,
    { id: '123', last: 'Mirodil', first: 'qwert' },
  ];

  return contacts2;
}

export default function Root() {
  const contacts = useLoaderData() as Contact[];
  console.log('inside of Root', contacts);

  return (
    <>
      <div id='sidebar'>
        <Header />
        {/*<h1>React Router Contacts</h1>*/}
        <div>
          <form id='search-form' role='search'>
            <input
              id='q'
              aria-label='Search contacts'
              placeholder='Search'
              type='search'
              name='q'
            />
            <div id='search-spinner' aria-hidden hidden={true} />
            <div className='sr-only' aria-live='polite'></div>
          </form>
          <form method='post'>
            <button type='submit'>New</button>
          </form>
        </div>
        <nav>
          <ul>
            {contacts.length ? (
              <ul>
                {contacts.map((contact: Contact) => (
                  <li key={contact.id}>
                    <Link to={`contacts/${contact.id}`}>
                      {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{' '}
                      {contact.favorite && <span>★</span>}
                    </Link>
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
      <div id='detail'>
        <Outlet />
      </div>
    </>
  );
}

function Header() {
  const contacts = useLoaderData() as Contact[];
  console.log('inside of Header', contacts);

  // console.log(jjj);
  return <h1>React Router Contacts???!!!</h1>;
}
