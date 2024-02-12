import { storage } from "@/_config/firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export const uploadAndGetImgUrl = async (
  file: File,
  folderName: string,
  name?: string,
) => {
  const fileName = name ?? file.name + uuidv4();
  const storageRef = ref(storage, `${folderName}/${fileName}`);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

export const deleteImg = async (url: string) => {
  const imageRef = ref(storage, url);
  await deleteObject(imageRef);
};
