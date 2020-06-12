import RestService from "../services/RestService";
import { decorate, observable, action } from "mobx";
import Picture from "../models/picture";

class PictureStore {
    constructor() {
        this.pictures = [];
        this.pictureService = new RestService("results");
        this.loadAllPictures();
    }

    loadAllPictures = async () => {
        const jsonBooks = await this.pictureService.getAll();
        jsonBooks.forEach(json => this.updatePictureFromServer(json));
      };



      createPicture = async picture => {
        const json = await this.pictureService.create(picture);
        this.updatePictureFromServer(json);
      };
    
      updatePicture = async picture => {
        const json = await this.pictureService.update(picture);
        this.updatePictureFromServer(json);
      };
    
      deletePicture = async picture => {
        const json = await this.pictureService.delete(picture);
        this.updatePictureFromServer(json);
      };

      updatePictureFromServer(json) {
        let picture = this.pictures.find(picture => picture.id === json.id);
        if (!picture) {
          picture = new Picture({
            id: json.id,
            store: this
          });
        }
        if (json.isDeleted) {
          this.pictures.remove(picture);
        } else {
          picture.updateFromJson(json);
        }
      }

      resolvePicture = id => this.pictures.find(picture => picture.id === id);

      addPicture = picture => {
        this.pictures.push(picture);
      };

      
}

decorate(PictureStore, {
    pictures: observable,
    addPicture: action,
    updatePictureFromServer: action
  });
  
  export default PictureStore;