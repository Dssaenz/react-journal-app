import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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