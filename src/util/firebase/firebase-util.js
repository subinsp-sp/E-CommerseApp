// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup,GoogleAuthProvider, signInWithRedirect, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXQ9JlOKYBVC30RW6WWLONk2jPBERWz6g",
  authDomain: "crwn-clothing-db-a4c98.firebaseapp.com",
  projectId: "crwn-clothing-db-a4c98",
  storageBucket: "crwn-clothing-db-a4c98.appspot.com",
  messagingSenderId: "869415714549",
  appId: "1:869415714549:web:e28bd8dfcd674a38ce0fbc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// above code got from firebase site by clicking</>

const provider=new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
});

export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

export const signInWithGoogleReDirect=()=>signInWithRedirect(auth,provider);

export const db=getFirestore();

export const createuserDocumentFromAuth=async (userAuth,additionalInformation={})=>{
  const userDocref=doc(db,'users',userAuth.uid)
  
  const userSnapshort=await getDoc(userDocref);
  
  if(!userSnapshort.exists()){
    const {displayName,email}=userAuth;
    const createdAt=new Date()

    try {
      await setDoc(userDocref,{
        displayName,email,createdAt,...additionalInformation
      })
    } catch (error) {
      console.log("error creating new user",error.message)
    }
  }

  return userDocref; 
}


export const createAuthuserWithEmailAndPassword=async (email,password)=>{

  if(!email||!password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
}