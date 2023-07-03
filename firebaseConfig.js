// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from 'firebase/app';
// // import { getFirestore } from 'firebase/firestore';
// // // import { getAnalytics } from "firebase/analytics";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyDcSmgXnkdla9seu11Y4jJhysZ_uqFeSsc",
// //   authDomain: "krifin-marketplace-eae80.firebaseapp.com",
// //   projectId: "krifin-marketplace-eae80",
// //   storageBucket: "krifin-marketplace-eae80.appspot.com",
// //   messagingSenderId: "751785416357",
// //   appId: "1:751785416357:web:62f10ce3d310a03f945f4c",
// //   measurementId: "G-Y6V7E5CB4R"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const firestore = getFirestore(app);

// // export { firestore };

// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//this is the firebase config for the krifin-marketplace-eae80, which I have created from my account
const firebaseConfig = {
  apiKey: "AIzaSyDcSmgXnkdla9seu11Y4jJhysZ_uqFeSsc",
  authDomain: "krifin-marketplace-eae80.firebaseapp.com",
  projectId: "krifin-marketplace-eae80",
  storageBucket: "krifin-marketplace-eae80.appspot.com",
  messagingSenderId: "751785416357",
  appId: "1:751785416357:web:62f10ce3d310a03f945f4c",
  measurementId: "G-Y6V7E5CB4R"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);


// export { firestore };
