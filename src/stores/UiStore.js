import { decorate, observable, action } from "mobx";

class UiStore {
  constructor(rootStore) {
    this.currentCode = undefined;
    this.loggedIn = ["Log in"];
    this.errorMessage = "";
    this.rootStore = rootStore;
  }

  logout = () => {
    this.loggedIn = "Log in";
  };

  setCurrentCode =  async (code) => {

    //dit komt uit de database
    await this.rootStore.boxStore.getBoxes();
    //stringfy het element anders lukt het niet hij heeft het mee als een []
    const boxCode =  await this.rootStore.boxStore.boxes.map(box => box.code).toString();

    if (code === boxCode ) {
      this.currentCode = this.rootStore.boxStore.boxes.code;
      this.loggedIn = "Log uit";
      console.log("succes");
    } else {
      const error = "Deze code bestaat niet.";
      console.log(error);
    }
  }
}

decorate(UiStore, {
  currentCode: observable,
  setCurrentCode: action
});

export default UiStore;
