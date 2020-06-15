import { decorate, observable, action } from "mobx";
import BoxService from "../services/BoxService";

class BoxStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.boxService = new BoxService(this.rootStore.firebase);
        this.boxes = [];
    }

    onBoxesChanged = boxes => {
        this.addBoxes(boxes)
    }

    getBoxes = async () => {
        const result = await this.boxService.getBox();
        this.onBoxesChanged(result.data());
        console.log(result.data());
      };

    addBoxes = box => {
        let boxExist = this.boxes.findIndex(item => item.id === box.id);
        if(boxExist === -1) {
            this.boxes.push(box);
        }
    }

}

decorate(BoxStore, {
    boxes: observable,
    addBoxes: action
  });

export default BoxStore;