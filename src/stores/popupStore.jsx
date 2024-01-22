import { makeAutoObservable } from "mobx";

class PopupState {
  opened = false;

  constructor() {
    makeAutoObservable(this);
  }
  setOpened = () => {
    this.opened = true;
  };
  setClosed = () => {
    this.opened = false;
  };
}
export default new PopupState();
