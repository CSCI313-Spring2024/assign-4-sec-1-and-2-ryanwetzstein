import { Component, computed, inject, OnInit } from '@angular/core';
import { ContactService } from '../../contact.service';
import { Contact } from '../../contact';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent implements OnInit {
  contactService = inject(ContactService);
  contactArr = this.contactService.getContacts();

  ngOnInit() {
    this.fetchContacts();
  }

  fetchContacts() {
    this.contactArr = this.contactService.getContacts();
  }
}
