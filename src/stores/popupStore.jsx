import { makeAutoObservable } from "mobx";

class PopupState {
  popups = {};

  constructor() {
    makeAutoObservable(this);
  }

  setClosed = () => {
    this.popups = {};
  };

  isOpen = (index) => {
    if (!this.popups[index]) {
      this.popups[index] = false;
    }
    this.popups[index] = true;
    console.log("this", this.popups[index]);
  };
}
export default new PopupState();
