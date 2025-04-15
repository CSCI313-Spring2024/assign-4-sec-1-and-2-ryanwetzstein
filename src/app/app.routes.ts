import { Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';

export const routes: Routes = [
  { path: '', component: ContactListComponent, title: 'Contact List' },
];
