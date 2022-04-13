import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDLTkxoJi9Ut5uC61-FHwh-hWMA4iFwl5U",
    authDomain: "nft-marketplace-29336.firebaseapp.com",
    projectId: "nft-marketplace-29336",
    storageBucket: "nft-marketplace-29336.appspot.com",
    messagingSenderId: "391303721997",
    appId: "1:391303721997:web:262b09b276c933ed099144",
    measurementId: "G-3BGXWVTE4L"
};
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);


export default app;