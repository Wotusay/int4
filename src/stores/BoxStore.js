import { decorate, observable, action } from "mobx";
import BoxService from "../services/BoxService";

class BoxStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.boxService = new BoxService(this.rootStore.firebase);
        this.boxes = [];
        this.activities = [];
    }

    onActivitiesChanged =  activities => {
        this.addActivities(activities);
    }

    addActivities = activity => {
        this.activities.push(activity);
        this.rootStore.uiStore.setCurrentActivities(activity);
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

      getActivities = async (time, code) => {
              const result =  await this.boxService.getBoxActivities('ochtend-activiteiten','3403 - XPD2  - SPA1 - DPE2');
              this.onActivitiesChanged(result);
      }

    addBoxes = async box => {
        this.boxes.push(box);
        this.rootStore.uiStore.setCurrentBox(box);
    }

}

decorate(BoxStore, {
    boxes: observable,
    addBoxes: action,
    activities:observable,
    addActivities: action,
  });

export default BoxStore;