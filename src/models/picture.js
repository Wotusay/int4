import { v4 } from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Picture {
    constructor({ id = v4(), store, ...json }) {
        this.id = id;
    
        if (!store) {
          throw new Error("store is required");
        }
        this.store = store;
        this.updateFromJson(json);
        this.store.addPicture(this);
      }

      updateFromJson({ alt_description, height, width , urls}) {
        this.urls = urls;
        this.height = height;
        this.width = width;
        this.alt_description = alt_description;
      }

      get asJson() {
        return {
          id: this.id,
          width: this.width,
          height: this.height,
          alt_description: this.alt_description,
          urls: this.urls
        };
      }

}

decorate(Picture, {
    alt_description: observable,
    height: observable,
    width: observable,
    urls:observable,
  
    updateFromJson: action,
    asJson: computed
  });

export default Picture;