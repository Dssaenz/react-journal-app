import { checkingCredentials, login, logout } from "./authSlice";

import { clearNotesLogout } from "../journal/journalSlice";

import {
  singInWithGoogle,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  logoutFirebase,
} from "../../firebase/providers";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    const { ok, errorMessage } = result;

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login(result));
  };
};

export const startRegisterWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { uid, photoURL, ok, errorMessage } =
      await registerWithEmailAndPassword({ email, password, displayName });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, photoURL, email, displayName }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { uid, photoURL, displayName, ok, errorMessage } =
      await loginWithEmailAndPassword({ email, password });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, photoURL, email, displayName }));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(clearNotesLogout());
    dispatch(logout());
  };
};
