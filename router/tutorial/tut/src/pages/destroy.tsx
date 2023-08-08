import { ActionFunction, redirect } from 'react-router-dom';
import { deleteContact } from '../contact.ts';

export const action: ActionFunction = async ({ params }) => {
  // throw Error('MyCustom Error');
  await deleteContact(params.contactId);

  return redirect('/');
};
