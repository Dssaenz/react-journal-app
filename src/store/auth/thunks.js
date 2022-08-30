import { checkingCredentials, login, logout } from './authSlice';

import { singInWithGoogle } from '../../firebase/providers';

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch( checkingCredentials() );
  }
}

export const startGoogleSignIn = (email, password) => {
  return async (dispatch) => {
    dispatch( checkingCredentials() );
    const result = await singInWithGoogle();
    if(!result.ok) return dispatch(logout( result.errorMessage ));
    dispatch( login(result) );
  }
}