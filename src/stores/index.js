import { configure } from "mobx";
import PictureStore from "./PictureStore";


configure({ enforceActions: `observed` });

class Store {
  constructor() {
    this.pictureStore = new PictureStore(this);

  }

  loadAllData = async () => {
    await this.pictureStore.loadAllPictures();
  };
}

export default Store;

