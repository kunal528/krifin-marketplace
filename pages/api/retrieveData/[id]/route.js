import { firestore } from "../../../firebaseConfig";
import {getDoc, doc} from "firebase/firestore";

const retrieveData = async (req,{params}) => {
  // const snapshot = collection(firestore, 'alltradeAssets');
    const id = params.trim();
    console.log("id is:", id)
  try {
    
    const documentRef = doc(firestore, 'alltradeAssets', id);
    const documentSnapshot = await getDoc(documentRef);
    const documentData = documentSnapshot.data();
    console.log("data is:", documentData)
    res.status(200).json(documentData);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve data", error: error.message });
  }
};

export default retrieveData;
