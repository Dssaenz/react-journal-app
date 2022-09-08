import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const {  displayName, photoURL, email, uid } = result.user;
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    return {
      ok: true,
      // User info
      displayName,
      photoURL,
      email,
      uid,
    }
  } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        ok: false,
        errorMessage,
        errorCode,
      }
  }
}

export const registerWithEmailAndPassword = async ({ email, password, displayName }) => {
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL } = resp.user;

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
    }
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    }
  }
}