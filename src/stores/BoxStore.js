import { decorate, observable, action } from "mobx";
import BoxService from "../services/BoxService";

class BoxStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.boxService = new BoxService(this.rootStore.firebase);
        this.boxes = [];
    }

    onBoxesChanged = box => {
        this.addBoxes(box)
    }

    getBoxes = async code => {
        if(code !== undefined) {
        const result = await this.boxService.getBoxWithCode(code);
        this.onBoxesChanged(result);
        }
      };

    addBoxes = async box => {
        this.boxes.push(box);
        this.rootStore.uiStore.setCurrentBox(box);
    }

}

decorate(BoxStore, {
    boxes: observable,
    addBoxes: action
  });

export default BoxStore;