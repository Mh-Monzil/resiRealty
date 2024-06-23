import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";

export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name,image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image
    })
  }

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    // setLoading(true);
    window.location.reload();
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoading(false);
    });
    return () => unSubscribe();
  },[reload]);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const twitterLogin = () => {
    return signInWithPopup(auth, twitterProvider);
  };

  

  const authInfo = { user,setReload, loading, createUser, loginUser, setUser,googleLogin, logOut, githubLogin, twitterLogin,updateUserProfile };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
