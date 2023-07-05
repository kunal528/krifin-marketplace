import { firestore } from "../../../firebaseConfig";
import {collection, getDocs} from "firebase/firestore";
// import useFirebase from "../../../lib/useFirebase";

const retrieveData = async (req, res) => {
  // const {getAllTradeAssets} = useFirebase();
  try {
    // const fdata = await getAllTradeAssets();
    // console.log("trade assets data", fdata)
    // console.log("snapshot data captured:", snapshot)
    const snapshot = collection(firestore, 'alltradeAssets');
    const dataAll = await getDocs(snapshot);
    console.log("alldata:", dataAll);
    const data = dataAll.docs.map((doc) => doc.data());
    console.log("data is:", data)
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve data", error: error.message });
  }
};

export default retrieveData;

