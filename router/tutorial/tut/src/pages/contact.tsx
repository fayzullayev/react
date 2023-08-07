import { ActionFunction, Form, useLoaderData } from 'react-router-dom';
import { Contact } from '../types.ts';
import { getContact } from '../contact.ts';

export const loader: ActionFunction = async ({ params }) => {
  if (!params.contactId) {
    return null;
  }

  return await getContact(params.contactId);
};

export default function ContactPage() {
  const contact: Contact = useLoaderData() as Contact;

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
  const favorite = contact.favorite;

  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  );
}
