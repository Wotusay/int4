import { configure } from "mobx";
import PictureStore from "./PictureStore";
import UiStore from "./UiStore";

configure({ enforceActions: `observed` });

class Store {
  constructor() {
    this.pictureStore = new PictureStore(this);
    this.uiStore = new UiStore(this);
  }

  loadAllData = async () => {
    await this.pictureStore.loadAllPictures();
  };
}

export default Store;
