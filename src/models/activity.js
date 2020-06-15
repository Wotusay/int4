import { v4 } from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Activity {
    constructor({ id = v4(), store, time, photos= [],description , duration = '1 uur', complete = false, title, materials = [] }) {
        this.id =  id;
        this.store= store;
        this.time= time; 
        this.photos = photos; //apartre model
        this.title= title;
        this.duration = duration;
        this.description = description ;
        this.complete= complete;
        this.materials = materials;
    }
    

}

export default Activity;