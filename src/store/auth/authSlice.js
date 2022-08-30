import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'not-authenticated', // 'checking' - 'not-authenticated' - 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, payload) => {},
    logout: (state, payload) => {},
    checkingCredentials: (state) => {
      state.status = 'checking'
    }
  }
})

export const {  login, logout, checkingCredentials } = authSlice.actions;