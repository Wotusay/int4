import React, { useState } from "react";
import { useStores } from "../../hooks";
import { useObserver } from "mobx-react-lite";
import { storage } from "../../services/FirebaseService";


const NewPhoto = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage.ref("images").child(image.name);
      }
    );
  };

  return useObserver(() => (
    <>
      <li>
        <input onChange={handleChange} type="file"></input>
        <button onClick={handleUpload}>Submit</button>
      </li>
    </>
  ));
};

export default NewPhoto;
