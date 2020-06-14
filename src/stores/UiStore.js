import { decorate, observable, action } from "mobx";

class UiStore {
  constructor() {
    this.currentCode = undefined;
  }

  setCurrentCode(code) {
    if (code === "3403 - XPD2  - SPA1 - DPE2") {
      this.currentCode = true;
      console.log("succes");
    } else {
      console.log("error");
    }
  }
}

decorate(UiStore, {
  currentCode: observable,
  setCurrentCode: action,
});

export default UiStore;
