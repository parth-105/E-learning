// firebaseUtils.js

import { getStorage, ref, uploadBytes, getDownloadURL } from '@firebase/storage';
import { db, storage} from '@/firebase'


export const uploadFileAndGetUrl = async (file) => {
  try {
  
    const storageRef = ref(storage, `uploads/${Date.now()}`); 

    // Upload the file
    await uploadBytes(storageRef, file);

    // Get the download URL
    const downloadUrl = await getDownloadURL(storageRef);

    return downloadUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
    return null; // Handle the error appropriately in your application
  }
};
