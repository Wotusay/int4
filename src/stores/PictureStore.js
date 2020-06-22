import { decorate, observable, action } from "mobx";
import PictureService from "../services/PictureService";

class PictureStore {
  constructor(rootstore) {
    this.rootstore = rootstore;
    this.pictureService = new PictureService(this.rootstore.firebase);
    this.pictures = [];
  }


  uploadFile = async file => {
    const upload = await this.pictureService.uploadPicture(file);
    file.downloadURL = upload;
    console.log(upload)
  }
  
}

export default PictureStore;
