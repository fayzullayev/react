import {
  ActionFunctionArgs,
  Form,
  LoaderFunctionArgs,
  useFetcher,
  useLoaderData,
} from 'react-router-dom';
import { Contact } from '../utils/types.ts';
import { getContact, updateContact } from '../contact.ts';

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();

  return updateContact(params.contactId, {
    favorite: formData.get('favorite') === 'true',
  });
}

export async function loader({ params: { contactId } }: LoaderFunctionArgs) {
  console.log('contactId', contactId);

  const contact: Contact | null = await getContact(contactId);

  return contact;
}

export default function ContactPage() {
  const contact = useLoaderData() as Contact | null;

  console.log('contact in contact-page', contact);

  if (!contact) {
    return <h1>No record found</h1>;
  }

  return (
    <div id='contact'>
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || undefined}
          alt={'Just image'}
        />
      </div>
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target='_blank' href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action='edit'>
            <button type='submit'>Edit</button>
          </Form>
          <Form
            method='post'
            action='destroy'
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record.')) {
                event.preventDefault();
              }
            }}
          >
            <button type='submit'>Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

type FavoriteProps = {
  contact: Contact;
};

function Favorite({ contact }: FavoriteProps) {
  const fetcher = useFetcher();
  // yes, this is a `let` for later
  let favorite = contact.favorite;

  if (fetcher.formData) {
    favorite = fetcher.formData.get('favorite') === 'true';
  }

  return (
    <fetcher.Form method='post'>
      <button
        name='favorite'
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </fetcher.Form>
  );
}
