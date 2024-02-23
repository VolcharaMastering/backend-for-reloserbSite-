/* eslint-disable lines-between-class-members */
import { makeAutoObservable } from "mobx";

class DropDownList {
  lists = {};

  constructor() {
    makeAutoObservable(this);
  }

  setToggled = (id) => {
    this.lists[id] = !this.lists[id];
  };
  setItem = (id) => {
    this.lists = { ...this.lists, [id]: false };
  };
}
export default new DropDownList();
