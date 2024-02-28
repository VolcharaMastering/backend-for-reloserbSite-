import { makeAutoObservable } from "mobx";
import { contacts } from "../content/pagesContent/contactsPageContent.json";

class ContactsStore {
  contactsToShow = [];

  constructor() {
    this.contacts = contacts;
    makeAutoObservable(this);
  }

  getContacts = (contact) => {
    switch (contact) {
      case "coworking":
        return this.contacts.coworking;
      case "consult":
        return this.contacts.consult;
      case "realEstate":
        return this.contacts.realEstate;
      case "cargo":
        return this.contacts.cargo;
      case "visarun":
        return this.contacts.visarun;
      case "voffice":
        return this.contacts.voffice;
      case "lang":
        return this.contacts.lang;
      default:
        return this.contacts.main;
    }
  };

  setContacts = (chosenContact) => {
    this.contactsToShow = this.getContacts(chosenContact);
  };
}
export default new ContactsStore();
