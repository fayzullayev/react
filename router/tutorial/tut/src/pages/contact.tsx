import {
  Form,
  LoaderFunction,
  useFetcher,
  useLoaderData,
} from 'react-router-dom';
import { Contact } from '../types.ts';
import { getContact, updateContact } from '../contact.ts';
import { ActionFunctionArgs } from '@remix-run/router/utils.ts';

export const loader: LoaderFunction = async ({ params }) => {
  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }

  console.log('contact-', contact);
  return contact;
};

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get('favorite') === 'true',
  });
}

export default function ContactPage() {
  const contact: Contact = useLoaderData() as Contact;
  console.log('contact-ContactPage', contact);
  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || undefined} />
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
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record.')) {
                event.preventDefault();
              }
            }}
          >
            <input
              hidden={true}
              type="text"
              name={'name'}
              defaultValue={'Mirodil'}
            />
            <button type="submit">Delete</button>
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
  // yes, this is a `let` for later
  const fetcher = useFetcher();
  let favorite = contact.favorite;

  if (fetcher.formData) {
    favorite = fetcher.formData.get('favorite') === 'true';
  }

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </fetcher.Form>
  );
}
