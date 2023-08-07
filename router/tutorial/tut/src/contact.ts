import localforage from 'localforage';
import { matchSorter } from 'match-sorter';
import sortBy from 'sort-by';
import { Contact } from './types.ts';

export async function getContacts(query?: string) {
  console.log('it Works!');
  await fakeNetwork(`getContacts:${query}`);

  let contacts: Contact[] | null = await localforage.getItem<Contact[] | null>(
    'contacts',
  );

  if (!contacts) contacts = [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ['first', 'last'] });
  }
  return contacts.sort(sortBy('last', 'createdAt'));
}

export async function createContact(): Promise<Contact> {
  await fakeNetwork();
  const id = Math.random().toString(36).substring(2, 9);
  const contact: Contact = { id, createdAt: Date.now() };
  const contacts: Contact[] = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getContact(id: string) {
  await fakeNetwork(`contact:${id}`);
  const contacts: Contact[] | null = await localforage.getItem('contacts');
  const contact = contacts?.find((contact) => contact.id === id);
  return contact ?? null;
}

export async function updateContact(id: string | undefined, updates: Contact) {
  await fakeNetwork();
  const contacts: Contact[] | null = await localforage.getItem('contacts');
  const contact = contacts?.find((contact) => contact.id === id);
  if (!contact) throw new Error('No contact found for ' + id);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export async function deleteContact(id?: string) {
  console.log('delete id', id);
  const contacts: Contact[] | null = await localforage.getItem('contacts');
  console.log('contacts', contacts);
  const index = contacts?.findIndex((contact) => contact.id === id);
  console.log('index', index);

  if (index !== undefined) {
    if (index > -1) {
      contacts?.splice(index, 1);
      await set(contacts);
      return true;
    }
  }

  return false;
}

function set(contacts: Contact[] | null) {
  return localforage.setItem('contacts', contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key?: string) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 500);
  });
}
