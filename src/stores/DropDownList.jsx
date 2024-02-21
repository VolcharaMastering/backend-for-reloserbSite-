import { makeAutoObservable } from "mobx";

class DropDownList {
  lists = {};

  constructor() {
    makeAutoObservable(this);
  }

  setToggled = (id) => {
    this.lists[id] = !this.lists[id];
  };
}
export default new DropDownList();
