import { checkingCredentials, login, logout } from './authSlice';

import { singInWithGoogle, registerWithEmailAndPassword, loginWithEmailAndPassword } from '../../firebase/providers';

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch( checkingCredentials() );
  }
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch( checkingCredentials() );
    const result = await singInWithGoogle();
    const { ok, errorMessage } = result;

    if(!ok) return dispatch( logout({ errorMessage }) );

    dispatch( login(result) );
  }
};

export const startRegisterWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch( checkingCredentials() );
    const { uid, photoURL, ok, errorMessage } = await registerWithEmailAndPassword({ email, password, displayName });

    if(!ok) return dispatch( logout({ errorMessage }) );

    dispatch( login({ uid, photoURL, email, displayName }) );
  }
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch( checkingCredentials() );
    const result = await loginWithEmailAndPassword({ email, password });
    const { ok, errorMessage } = result;

    if(!ok) return dispatch( logout({ errorMessage }) );

    dispatch( login(result) );
  }
}
