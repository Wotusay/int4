import { decorate, observable, action, computed } from "mobx";

class Photobook {
  constructor({ store }) {
    if (!store) {
      throw new Error("store is required");
    }
    this.store = store;
  }
}

decorate(Photobook, {});

export default Photobook;
