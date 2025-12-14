import { createContext, useEffect, useState } from "react";
import auth from "../services/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";



export const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(false);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = ()=>
  {
    return  signInWithPopup(auth,googleProvider)
  }
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    googleSignIn,
    createUser,
    signInUser,
    logOut,
    user,
    Loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{ children}</AuthContext.Provider>
  );
};
