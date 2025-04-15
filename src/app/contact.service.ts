import { Injectable, Signal, signal } from '@angular/core';
import { Contact } from './contact';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Adams',
      phone: '701-000-1000',
      email: 'john.adams@example.com',
    },
    {
      id: 2,
      firstName: 'Mary',
      lastName: 'Jane',
      phone: '701-000-1000',
      email: 'mary.jane@example.com',
    },
  ];
  contactsSignal = signal<Contact[]>(this.contacts);
  constructor() {}

  getContacts() {
    return this.contactsSignal;
  }

  // addContact(newContact: Contact) {
  //   this.contactsSignal.update((contacts) => [
  //     ...contacts,
  //     { ...newContact, id: this.generateId(contacts) },
  //   ]);
  // }

  // editContact(updatedContact: Contact) {
  //   this.contactsSignal.update((contacts) =>
  //     contacts.map((contact) =>
  //       contact.id === updatedContact.id ? { ...updatedContact } : contact
  //     )
  //   );
  // }
}
