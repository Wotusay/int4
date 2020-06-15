import { decorate, observable, action } from "mobx";
import BoxService from "../services/BoxService";

class BoxStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.boxService = new BoxService(this.rootStore.firebase);
        this.box = undefined;
    }

    onBoxesChanged = boxes => {
        this.addBoxes(boxes)
    }

    getBoxes = async code => {
        if(code !== undefined) {
        const result = await this.boxService.getBoxWithCode(code);
        this.onBoxesChanged(result);
        }
      };

    addBoxes = async box => {
        this.box = box;
        this.rootStore.uiStore.setCurrentBox();
    }

}

decorate(BoxStore, {
    box: observable,
    addBoxes: action
  });

export default BoxStore;