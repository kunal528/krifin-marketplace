// pages/api/insertData.js
import { firebaseConfig } from "../../firebaseConfig";
import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const insertData = async (req, res) => {
  const { data } = req.body;

  try {
    await firebase.firestore().collection("data").add(data);
    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to insert data", error });
  }
};

export default insertData;
