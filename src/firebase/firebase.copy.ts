import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  // CONFIG GOES HERE
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
// const analytics = getAnalytics(app);

export default app;
export {fireDB};