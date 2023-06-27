import { ref, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage";

//import storage var
import { storage, deleteFile } from "../firebase/firebase";

class FileService {
  uploadImage(file, onUploadProgress) {
    // need to return new promise
    // anonymous error function that resolves or rejects
    return new Promise((resolve, reject) => {
      // reference function from firebase
      const fileRef = ref(storage, "images/" + file.name);
      const uploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // what to do for update, how far uploaded?
          this.handleProgressUpdate(snapshot, onUploadProgress);
        },
        (err) => {
          // handle error
          reject(err.message);
        },
        () => {
          // get download url, resolve promise
          // reference the snapshot
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            // send the user back the downloadUrl
            resolve(downloadUrl);
          });
        }
      );
    });
    // wait for file to upload
  }

  handleProgressUpdate(snapshot, onUploadProgress) {
    // how far along is progress?
    // if user asks for progress, create var
    if (onUploadProgress) {
      // current bytes uploaded/total amount, get as percentage
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      onUploadProgress(progress);
    }
  }

  // take url as parameter because adress to storage location
  async deleteFile(downloadURL) {
    // reference to filebase storage
    const fileRef = ref(storage, downloadURL);
    await deleteObject()
  }
}

const service = new FileService();
export default service;
