import { decorate, observable, action, computed } from "mobx";

class UiStore {
  constructor(rootStore) {
    this.currentCode = "3403 - XPD2 - SPA1 - DPE2";
    this.rootStore = rootStore;
    this.currentBox = undefined;
    this.loginState = false;
    this.currentActivities = undefined;
    this.currentActivity = undefined;
  }

  setCurrentActivity = activity => {
    this.currentActivity = activity;
  }

  login = async () => {
    this.loginState = true;
    this.rootStore.pictureStore.getPictures();
  };

  setCurrentActivities = activities => {
    this.currentActivities = activities;
  }

  logout = () => {
    this.loginState = false;
    this.empty();
    this.rootStore.pictureStore.empty();
    this.rootStore.boxStore.empty();
    this.currentActivities = undefined;
    this.currentActivity = undefined;
  };

  setCurrentBox = box => {
    this.currentBox = box;
  };

  setCurrentCode = async code => {
    this.currentCode = code;
    await this.searchWithCode(code);
    //dit komt uit de database
    //stringfy het element anders lukt het niet hij heeft het mee als een []
  };

  searchWithCode = async code => {
    await this.rootStore.boxStore.getBoxes(code);
  };

  empty() {
    this.currentBox = undefined;
  }

  emptyActivities() {
    this.currentActivities = undefined;
    this.currentActivity = undefined;
  }

  get checker() {
    if (this.currentBox !== undefined) {
      return this.currentBox.code;
    } else {
      return undefined;
    }
  }
}

decorate(UiStore, {
  currentCode: observable,
  currentBox: observable,
  loginState: observable,
  login: action,
  currentActivities: observable,
  setCurrentCode: action,
  empty: action,
  checker: computed,
  emptyActivities: action
});

export default UiStore;
