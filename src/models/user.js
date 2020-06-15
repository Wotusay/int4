import { v4 } from "uuid";
import { decorate, observable, action, computed } from "mobx";

class User {
    constructor({ id = v4(), store, box, photos= [], }) {
        this.id =  id;
        this.store = store;
        this.box = box; //maar 1 user
        this.photos = photos; // verschillende

    }
    

}

export default User;