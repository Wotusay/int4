import { decorate, observable, action } from "mobx";

class UiStore {
  constructor() {
    this.currentCode = undefined;
    this.loggedIn = ["Log in"];
    this.errorMessage = "";
  }

  logout = () => {
    this.loggedIn = "Log in";
  };

  setCurrentCode(code) {
    if (code === "3403 - XPD2  - SPA1 - DPE2") {
      this.currentCode = true;
      this.loggedIn = "Log uit";
      console.log("succes");
    } else {
      const error = "Deze code bestaat niet.";
      console.log(error);
      this.errorMessage = "Deze code bestaat niet.";
    }
  }
}

decorate(UiStore, {
  currentCode: observable,
  setCurrentCode: action,
});

export default UiStore;
