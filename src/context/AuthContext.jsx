import { createContext, useEffect, useState } from "react";
import auth from "../services/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";

export const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };
  const profileUpdate = (user,data) => {
    return updateProfile(user, data);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    
    };
  }, []);

  const authInfo = {
    profileUpdate,
    googleSignIn,
    createUser,
    signInUser,
    logOut,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{!loading && children}</AuthContext.Provider>
  );
};
