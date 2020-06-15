import { v4 } from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Box {
    constructor({ id = v4(), store, user, activities= [], price = '€40', code, title, materials = [] }) {
        this.id =  id;
        this.store= store;
        this.user= user; //maar 1 user
        this.activities = activities; //apartre model
        this.title= title;
        this.price = price;
        this.code= code;
        this.materials = materials; //doorgekergen door store
    }
    

}

export default Box;