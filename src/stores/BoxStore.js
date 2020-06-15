import { decorate, observable, action } from "mobx";
import Box from "../models/box";
import BoxService from "../services/BoxService";

class BoxStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.boxService = new BoxService(this.rootStore.firebase);
        this.boxes = [];
    }

    onBoxChanged = box => {
        this.addBox(box);
    }

    getBoxes = async () => {
        const result = await this.boxService.getBox()
        this.onBoxChanged(result);
      };
}

decorate(BoxStore, {
    boxes: observable,
    addBox: action
  });

export default BoxStore;