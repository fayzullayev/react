import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { deleteContact } from '../contact.ts';

export async function action({ params }: ActionFunctionArgs) {
  // throw new Error('oh dang!');
  await deleteContact(params.contactId as string);
  return redirect('/');
}
