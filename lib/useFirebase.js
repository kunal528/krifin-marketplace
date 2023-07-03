import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, serverTimestamp, setDoc, Timestamp, updateDoc, where } from "firebase/firestore";
import { getDownloadURL, uploadBytes, getStorage, ref } from 'firebase/storage'
import { useState } from "react";

const useFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAbO3hm82jPybMILvbZrAezRNZSvZITacs",
        authDomain: "krifin-marketplace.firebaseapp.com",
        projectId: "krifin-marketplace",
        storageBucket: "krifin-marketplace.appspot.com",
        messagingSenderId: "464370378394",
        appId: "1:464370378394:web:36357671c8b8ace3366123"
    };
    const app = initializeApp(firebaseConfig);
    function init() {

        return (getFirestore(app))
    }

    async function getNFTs() {
        const db = init()
        const collectionRef = collection(db, "nfts");
        var result = await getDocs(collectionRef)
        return result.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        })
    }

    async function getNFTsBatch(tokenIds) {
        const db = init()
        const collectionRef = collection(db, "nfts");
        const q = query(collectionRef, where("id", "in", tokenIds));
        var result = await getDocs(q)
        return result.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        })
    }

    async function getNFTsByListing(value) {
        console.log('getNFTsByListing')
        const db = init()
        const collectionRef = collection(db, "nfts");
        const q = query(collectionRef, where("listed", "==", value));
        var result = await getDocs(q)
        console.log(result.docs)
        return result.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        })
    }

    async function getCollections() {
        const db = init()
        const collectionRef = collection(db, "collections");
        var result = await getDocs(collectionRef)
        return result.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        })
    }

    async function getAirdrops() {
        const db = init()
        const collectionRef = collection(db, "airdrops");
        var result = await getDocs(collectionRef)
        return result.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        })
    }
    async function getDiscounts() {
        const db = init()
        const collectionRef = collection(db, "discounts");
        var result = await getDocs(collectionRef)
        return result.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        })
    }

    async function getNFT(id) {
        const db = init()
        const documentRef = doc(db, "nfts", id);
        var result = await getDoc(documentRef)
        return {
            ...result.data(),
            id: result.id
        }
    }

    async function getCollection(id) {
        const db = init()
        const documentRef = doc(db, "collections", id);
        var result = await getDoc(documentRef)
        return {
            ...result.data(),
            id: result.id
        }
    }

    async function getAirdrop(id) {
        const db = init()
        const documentRef = doc(db, "airdrops", id);
        var result = await getDoc(documentRef)
        return {
            ...result.data(),
            id: result.id
        }
    }
    async function getDiscount(id) {
        const db = init()
        const documentRef = doc(db, "discounts", id);
        var result = await getDoc(documentRef)
        return {
            ...result.data(),
            id: result.id
        }
    }

    return { getNFTs, getNFT,getNFTsBatch, getCollections, getCollection, getNFTsByListing, getAirdrops, getAirdrop, getDiscounts, getDiscount, }
}


export default useFirebase