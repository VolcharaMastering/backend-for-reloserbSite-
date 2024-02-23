import { makeAutoObservable } from "mobx";

class DropDownList {
  lists = {};

  constructor() {
    makeAutoObservable(this);
  }

  setToggled = (id) => {
    this.lists[id] = !this.lists[id];
    console.log(this.lists);
  };
  setItem = (id) => {
    this.lists = { ...this.lists, [id]: false };
    console.log(this.lists);
  };
}
export default new DropDownList();
