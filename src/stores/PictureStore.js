import { decorate, observable, action } from "mobx";
import PictureService from "../services/PictureService";
import { pictureConverter } from "../models/picture";

class PictureStore {
  constructor(rootstore) {
    this.rootstore = rootstore;
    this.pictureService = new PictureService(this.rootstore.firebase);
    this.pictures = [];
  }

  addPictures = picture => {
        this.pictures.push(picture); 
  }

  onPictureChanged = pictures => {
    this.addPictures(pictures);
  }

  getPictures = async () => {
    const result = await this.pictureService.getAllImages(this.rootstore.uiStore.currentCode);
    this.onPictureChanged(result);
    console.log(result);
  }

  uploadFile = async (file, picture) => {
    //uploading and getting the img url
    const upload = await this.pictureService.uploadPicture(file);
    console.log(upload);
    //connection between the firestore and storage
    picture.comment = '';
    picture.activity = '';
    picture.url = upload;
    picture.code = this.rootstore.uiStore.currentCode;
    picture.userId = '255';
    const newPictureRef = await this.pictureService.createImage(picture);
    picture.id = newPictureRef.id;
    
    return picture;
  }

  empty() {
    this.pictures = [];
  }

  updatePicture = async (pictureId, updates) => {
   await this.pictureService.updatePicture(pictureId, updates);
  }
  
}

decorate(PictureStore, {
  pictures: observable,
  empty: action,
  addPictures: action,
});

export default PictureStore;
