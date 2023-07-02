import { firestore } from "../../../firebaseConfig";
import {collection, getDocs} from "firebase/firestore";

const retrieveData = async (req, res) => {
  try {
    const snapshot = collection(firestore, 'alltradeAssets');
    // console.log("snapshot data captured:", snapshot)
    
    const dataAll = await getDocs(snapshot);
    const data = dataAll.docs.map((doc) => doc.data());
    console.log("data is:", data)
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve data", error: error.message });
  }
};

export default retrieveData;
