import { decorate, observable, action } from "mobx";
import Box from "../models/box";
import BoxService from "../services/BoxService";

class BoxStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.boxService = new BoxService(this.rootStore.firebase);
        this.boxes = [];
    }

    getBoxes = async () => {
        const result = this.boxService.getBox('dgO3kqzjeWwjS36ib8Cc');
        console.log(result);
    }
}

export default BoxStore;