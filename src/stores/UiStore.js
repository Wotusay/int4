import { decorate, observable, action,computed } from "mobx";

class UiStore {
  constructor(rootStore) {
    this.currentCode = '3403 - XPD2  - SPA1 - DPE2';
    this.rootStore = rootStore;
    this.currentBox = undefined;
    this.loginState = false; 
  }

  login = async () => {
      this.loginState = true;
      console.log('logged in');
    
  }

  logout = () => {
      this.loginState = false;
      this.empty();
    
  }

  setCurrentBox = box => {
    this.currentBox = box

  }

  setCurrentCode = async (code) => {
    this.currentCode = code;
    await this.searchWithCode(code);
    //dit komt uit de database
    //stringfy het element anders lukt het niet hij heeft het mee als een []
  }

  searchWithCode = async code => {
    await this.rootStore.boxStore.getBoxes(code);
  }

  empty() {
    this.currentBox = undefined;
  }

  get checker() {
      if(this.currentBox !== undefined) {
        return this.currentBox.code
      }
  }
}

decorate(UiStore, {
  currentCode: observable,
  currentBox: observable,
  loginState: observable,
  login:action, 
  setCurrentCode: action,
  empty:action,
  checker: computed,

});

export default UiStore;
