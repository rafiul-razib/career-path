import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  const register = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setIsLoading(false);
      // console.log(loggedUser);
      // It user exists issue a token
      if (currentUser) {
        axios
          .post("https://career-path-server.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log("token response", res.data));
      } else {
        axios
          .post("https://career-path-server.vercel.app/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { googleSignIn, register, signIn, logOut, isLoading, user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
