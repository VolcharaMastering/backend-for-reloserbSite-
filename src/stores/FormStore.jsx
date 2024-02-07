import { makeAutoObservable } from "mobx";

class FormStore {
  contactsToShow = [];

  constructor() {
    this.fieldLinks = fieldLinks;
    makeAutoObservable(this);
  }

  getContacts = (contact) => {
    switch (contact) {
      case "coworking":
        return this.fieldLinks.coworking;
      case "realEstate":
        return this.fieldLinks.realEstate;
      case "cargo":
        return this.fieldLinks.cargo;
      case "visarun":
        return this.fieldLinks.visarun;
      default:
        return this.fieldLinks.main;
    }
  };

  setContacts = (chosenContact) => {
    this.contactsToShow = this.getContacts(chosenContact);
  };
}
export default new FormStore();
