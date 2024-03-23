import { makeAutoObservable } from "mobx";

class FormStore {
  forms = {};

  constructor() {
    makeAutoObservable(this);
  }

  setOpened = (data) => {
    this.forms = data;
  };

  setClosed = () => {
    this.forms = {};
  };
}
export default new FormStore();
