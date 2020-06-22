import { decorate, observable, action } from "mobx";
import PictureService from "../services/PictureService";
import { pictureConverter } from "../models/picture";

class PictureStore {
  constructor(rootstore) {
    this.rootstore = rootstore;
    this.pictureService = new PictureService(this.rootstore.firebase);
    this.pictures = [];
  }


  uploadFile = async (file, picture) => {
    const upload = await this.pictureService.uploadPicture(file);
    console.log(upload);

    picture.url = upload;
    picture.comment = '';
    picture.code = this.rootstore.uiStore.currentCode;
    picture.userId = '255';
    picture.activity = '';
    console.log(picture);
    const newPictureRef = await this.pictureService.createImage(picture);
    picture.id = newPictureRef.id;
  }
  
}

export default PictureStore;
