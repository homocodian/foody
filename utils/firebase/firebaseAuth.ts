import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "./firebaseConfig";

const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const createAccount = (email: string, passowrd: string) => {
  return createUserWithEmailAndPassword(auth, email, passowrd);
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth,provider);
}

const logout = () => {
  return signOut(auth);
};

export { createAccount, signInWithGoogle ,logout, login };
