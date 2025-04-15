import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ContactListComponent,
    AddContactComponent,
    EditContactComponent,
    RouterLink, RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'assignment-4';
}
