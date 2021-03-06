import { decorate, observable, action } from "mobx";
import BoxService from "../services/BoxService";

class BoxStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.boxService = new BoxService(this.rootStore.firebase);
        this.boxes = [];
        this.activities = [];
    }



    onActivitiesChanged = activities => {
        this.addActivities(activities);
    };

    onBoxesChanged = box => {
        this.addBoxes(box)
    };

    getBoxes = async code => {
        if(code !== undefined) {
        const result = await this.boxService.getBoxWithCode(code);
        this.onBoxesChanged(result);
        }
    };

    getActivities = async (time, code) => {
            const result =  await this.boxService.getBoxActivities(time,code);
            this.onActivitiesChanged(result);
    };



    addBoxes = async box => {
        this.boxes.push(box);
        this.rootStore.uiStore.setCurrentBox(box);
    };  

    addActivities = async activities => {
        activities.map(activity => this.activities.push(activity));
        this.rootStore.uiStore.setCurrentActivities(activities);
    };

    getActivitiesById = id => this.activities.find(activity => activity.id === id);
    
    empty() {
        this.boxes = [];
        this.activities = []
    }
}

decorate(BoxStore, {
    boxes: observable,
    addBoxes: action,
    activities: observable,
    addActivities: action,
  });

export default BoxStore;